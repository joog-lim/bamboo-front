import { postController } from "../libs/requestUrls";
import RequestApiV2 from "../libs/requestApi";

class Post {
  getPost(isAdmin: boolean, cursor: number | string = "", status = "ACCEPTED") {
    try {
      return RequestApiV2({
        url: postController.getPost(cursor, status),
        headers: isAdmin,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  createPost(
    title: string,
    content: string,
    tag: string,
    questionId: string,
    questionAnswer: string
  ) {
    try {
      const data = {
        title,
        content,
        tag,
        verifier: {
          id: questionId,
          answer: questionAnswer,
        },
      };
      return RequestApiV2({
        method: "POST",
        url: postController.createPost(),
        data: data,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  deletePost(id: string, reason: string) {
    const data = {
      reason,
    };
    try {
      return RequestApiV2({
        method: "DELETE",
        url: postController.deletePost(id),
        data: data,
        headers: true,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  reportPost(id: string, reason: string) {
    try {
      const data = {
        reason,
      };
      return RequestApiV2({
        method: "PATCH",
        url: postController.reportPost(id),
        data: data,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  modifyPost(id: string, title: string, content: string, reason: string) {
    try {
      const data = {
        status,
        reason,
        title,
        content,
      };
      return RequestApiV2({
        method: "PATCH",
        url: postController.modifyPost(id),
        data: data,
        headers: true,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  setStatusPost(id: string, status = "ACCEPTED", reason: string) {
    try {
      const data = {
        status,
        reason,
      };
      return RequestApiV2({
        method: "POST",
        url: postController.setStatusPost(id),
        data: data,
        headers: true,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default new Post();
