"use client";

import { useEffect, useState } from "react";
import { Popover } from "radix-ui";
import {  Cross2Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import { SquareArrowRightExit } from "lucide-react";
import { apiFetch } from "@/lib/api";

interface UserProfile {
	name: string;
	lastname: string;
	email: string;
	profileImage: string;
	role: string;
}

const UserMenu = () => {
	const [user, setUser] = useState<UserProfile | null>(null);

	useEffect(() => {
		apiFetch<UserProfile>("/profile")
			.then(setUser)
			.catch(() => setUser(null));
	}, []);

	const logout = () => {
		apiFetch("/auth/logout", { method: "POST"}).then(() => {
			window.location.href = "/login";

		});
	};

	const avatarSrc = user?.profileImage || "/gata-salvaje.jpeg";

	return (
		<Popover.Root >
			<Popover.Trigger asChild>
				<button
					className="z-100 overflow-hidden inline-flex cursor-pointer size-8.75 items-center justify-center rounded-full bg-white/30 shadow-[0_2px_10px] shadow-blackA4 dark:shadow-amber-50/30 outline-none hover:bg-violet-300 focus:shadow-[0_0_0_2px] focus:shadow-black"
					aria-label="Update dimensions"
			>
				<Image src={avatarSrc} alt="User Avatar" width={35} height={35} className="object-cover w-full" />
			</button>
		</Popover.Trigger>
		<Popover.Portal>
			<Popover.Content
				className="z-100 border border-foreground/20 w-65 rounded bg-background p-5 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] dark:shadow-amber-50/10 will-change-[transform,opacity] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade"
				sideOffset={5}
			>
				<div className="flex flex-col items-center gap-3 py-2">
					<Image
						src={avatarSrc}
						alt={user?.name || "Avatar"}
						width={56}
						height={56}
						className="rounded-full object-cover size-14 border-2 border-slate-600/50"
					/>
					{user && (
						<>
							<p className="text-sm font-semibold text-foreground">{user.name} {user.lastname}</p>
							<p className="text-xs text-foreground/60">{user.email}</p>
						</>
					)}
				</div>
				<div className="flex flex-col justify-center items-center mt-3">
					<ul className="flex flex-col gap-3 w-full ">
						<li className="w-full">
							<button onClick={logout} className="z-9000 p-2 rounded bg-slate-700 hover:bg-slate-600 cursor-pointer  flex gap-2 items-center text-white w-full">logout <SquareArrowRightExit  className="w-5"/></button>
						</li>
					</ul>
				</div>
				<Popover.Close
					className="cursor-pointer absolute right-1.25 top-1.25 inline-flex size-6.25  items-center justify-center rounded-full text-violet11 outline-none hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
					aria-label="Close"
				>
					<Cross2Icon />
				</Popover.Close>
				<Popover.Arrow className="fill-background" />
			</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
);

}
export default UserMenu;
