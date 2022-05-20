import { selector } from "recoil";
import {userStateState} from "recoil/atom";

export const currentUserStateState = selector({
	key: "currentUserStateState",
	get: ({get}) => {
		const userState = get(userStateState);
		const isGuest = userState !== "GUEST";
		const isAdmin = userState === "ADMIN";
		const isUser = userState === "USER";
		return { isGuest, isAdmin, isUser };
	}
});
