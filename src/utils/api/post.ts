import { postController } from "../libs/requestUrls";
import RequestApi from "../libs/requestApi";

class Post {
  async getPost(cursor = "", status = "ACCEPTED") {
    try {
      return await RequestApi({
        url: postController.getPost(cursor, status),
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async createPost(
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
      return await RequestApi({
        method: "POST",
        url: postController.createPost(),
        data: data,
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async deletePost(id: string) {
    try {
      return await RequestApi({
        method: "DELETE",
        url: postController.deletePost(id),
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async petchPost(id: string, status: string, reason: string) {
    try {
      const data = {
        status,
        reason,
      };
      return await RequestApi({
        method: "PATCH",
        url: postController.patchPost(id),
        data: data,
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new Post();
