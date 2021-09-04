import { postController } from "../libs/requestUrls";
import RequestApi, { RequestApiV2 } from "../libs/requestApi";

class Post {
  getPost(isAdmin: boolean, cursor = "", status = "ACCEPTED") {
    try {
      return RequestApiV2({
        url: postController.getPost(cursor, status),
        headers: isAdmin,
      });
    } catch (e) {
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
      return RequestApi({
        method: "POST",
        url: postController.createPost(),
        data: data,
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  deletePost(id: string, reason: string) {
    console.log(id);
    try {
      return RequestApi({
        method: "DELETE",
        url: postController.deletePost(id),
        data: reason,
        headers: true,
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  reportPost(id: string, reason: string) {
    try {
      return RequestApi({
        method: "PATCH",
        url: postController.reportPost(id),
        data: reason,
      });
    } catch (e) {
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
      return RequestApi({
        method: "PATCH",
        url: postController.modifyPost(id),
        data: data,
        headers: true,
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  setStatusPost(id: string, status = "ACCEPTED") {
    try {
      const data = {
        status,
      };
      return RequestApi({
        method: "POST",
        url: postController.setStatusPost(id),
        data: data,
        headers: true,
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new Post();
