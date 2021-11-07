import { postController } from "../libs/requestUrls";
import RequestApiV2 from "../libs/requestApi";
import {
  createAlgorithmRes,
  deleteReq,
  deleteRes,
  getPostRes,
  modifyRes,
  reportRes,
  setStatusRes,
} from "types/api";
import { AxiosResponse } from "axios";

class Post {
  getPost(
    isAdmin: boolean,
    cursor: number | string = "",
    status = "ACCEPTED"
  ): Promise<void | AxiosResponse<getPostRes>> {
    try {
      return RequestApiV2({
        url: postController.getPost(cursor, status),
        canHeader: isAdmin,
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
  ): Promise<void | AxiosResponse<createAlgorithmRes>> {
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

  deletePost(
    id: string,
    reason: string
  ): Promise<void | AxiosResponse<deleteRes>> {
    const data = {
      reason,
    };
    try {
      return RequestApiV2({
        method: "DELETE",
        url: postController.deletePost(id),
        data: data,
        canHeader: true,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  reportPost(
    id: string,
    reason: string
  ): Promise<void | AxiosResponse<reportRes>> {
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

  modifyPost(
    id: string,
    title: string,
    reason: string,
    content: string
  ): Promise<void | AxiosResponse<modifyRes>> {
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
        canHeader: true,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  setStatusPost(
    id: string,
    status = "ACCEPTED",
    reason?: string
  ): Promise<void | AxiosResponse<setStatusRes>> {
    try {
      const data = {
        status,
        reason,
      };
      return RequestApiV2({
        method: "POST",
        url: postController.setStatusPost(id),
        data: data,
        canHeader: true,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default new Post();
