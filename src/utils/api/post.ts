import { algorithmController } from "../libs/requestUrls";
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
  getAlgorithm(
    isAdmin: boolean,
    cursor: number | string = "",
    status = "ACCEPTED"
  ): Promise<void | AxiosResponse<getPostRes>> {
    try {
      return RequestApiV2({
        url: algorithmController.getAlgorithm(cursor, status),
        canHeader: isAdmin,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  createAlgorithm(
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
        verify: {
          id: questionId,
          answer: questionAnswer,
        },
      };
      return RequestApiV2({
        method: "POST",
        url: algorithmController.createAlgorithm(),
        data: data,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  deleteAlgorithm(
    id: string,
    reason: string
  ): Promise<void | AxiosResponse<deleteRes>> {
    const data = {
      reason,
    };
    try {
      return RequestApiV2({
        method: "DELETE",
        url: algorithmController.deleteAlgorithm(id),
        data: data,
        canHeader: true,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  reportAlgorithm(
    id: string,
    reason: string
  ): Promise<void | AxiosResponse<reportRes>> {
    try {
      const data = {
        reason,
      };
      return RequestApiV2({
        method: "PATCH",
        url: algorithmController.reportAlgorithm(id),
        data: data,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  modifyAlgorithm(
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
        url: algorithmController.modifyAlgorithm(id),
        data: data,
        canHeader: true,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  setStatusAlgorithm(
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
        url: algorithmController.setStatusAlgorithm(id),
        data: data,
        canHeader: true,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default new Post();
