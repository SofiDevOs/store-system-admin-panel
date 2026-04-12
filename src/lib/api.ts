const API_URL = process.env.NEXT_PUBLIC_API_URL;
if (!API_URL) throw new Error("Missing NEXT_PUBLIC_API_URL");


let csrfToken: string | null = null;

/**
 * Retrieves the CSRF token required for non-GET requests.
 *
 * Fetches the token from the server on the first call and caches it in memory.
 * Subsequent calls return the cached value without making a network request.
 *
 * @returns The CSRF token string.
 * @throws {Error} If the token endpoint returns a non-OK response.
 */
export const getCsrfToken = async (): Promise<string> => {
    if (csrfToken) return csrfToken;
    const res = await fetch(`${API_URL}/auth/csrf-token`, { credentials: "include", cache: "no-store" });
    if (!res.ok) throw new Error("Secure connection failed");
    csrfToken = (await res.json()).csrfToken;
    return csrfToken as string;
};

/** Supported HTTP methods for {@link apiFetch}. */
type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

/**
 * Options for {@link apiFetch}.
 *
 * @property method - HTTP method to use. Defaults to `"GET"`.
 * @property body - Request payload. Can be a plain object or a `FormData` instance for file uploads.
 *   When `FormData` is provided, `Content-Type` is omitted so the browser sets the correct
 *   `multipart/form-data` boundary automatically.
 * @property headers - Additional headers to merge into the request.
 */
interface ApiOptions { method?: HttpMethod; body?: unknown; headers?: Record<string, string> }

/**
 * Authenticated fetch wrapper for all API calls.
 *
 * Handles common concerns automatically:
 * - Attaches `credentials: "include"` for cookie-based auth.
 * - Adds the `x-csrf-token` header for every non-GET request.
 * - Sets `Content-Type: application/json` unless the body is `FormData`.
 * - Returns `null` for empty responses (HTTP 204 or `Content-Length: 0`).
 * - Parses and throws server error messages from the response body.
 *
 * @template T - Expected shape of the successful response body.
 * @param endpoint - Path relative to `NEXT_PUBLIC_API_URL` (e.g. `"/auth/login"`).
 * @param options - Request options (method, body, extra headers).
 * @returns Parsed JSON response cast to `T`, or `null` for empty responses.
 * @throws {Error} If the response status is not OK, with the server's error message when available.
 *
 * @example
 * // JSON POST
 * const user = await apiFetch<User>("/auth/login", { method: "POST", body: { email, password } });
 *
 * @example
 * // File upload
 * const form = new FormData();
 * form.append("avatar", file);
 * await apiFetch("/employees/avatar", { method: "POST", body: form });
 */
export const apiFetch = async <T>(endpoint: string, { method, body, headers }: ApiOptions = {}): Promise<T> => {
    const isForm = body instanceof FormData;

    const res = await fetch(`${API_URL}${endpoint}`, {
        method, credentials: "include",
        headers: {
            Accept: "application/json",
            ...(!isForm && { "Content-Type": "application/json" }),
            ...(method !== "GET" && { "x-csrf-token": await getCsrfToken() }),
            ...headers,
        },
        ...(body !== undefined && { body: isForm ? body : JSON.stringify(body) }),
    });

    if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.errors?.[0]?.msg || err?.message || "Request failed");
    }

    return (res.status === 204 || res.headers.get("Content-Length") === "0") ? null as T : res.json();
};
