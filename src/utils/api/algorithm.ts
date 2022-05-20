import { algorithmController } from "../libs/requestUrls";
import RequestApiV2 from "../libs/requestApi";
import {
  createAlgorithmRes,
  deleteRes,
  getAlgorithmsRes,
  modifyRes,
  reportRes,
  setStatusRes,
} from "types/api";
import { AxiosResponse } from "axios";

class Algorithm {
  getAlgorithm(
		isGuest: boolean,
		isAdmin: boolean,
    cursor: number | string = "",
    status = "ACCEPTED"
  ): Promise<void | AxiosResponse<getAlgorithmsRes>> {
    try {
      return RequestApiV2({
        url: algorithmController.getAlgorithm(cursor, status, isAdmin),
        canHeader: !isGuest,
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
    idx: number,
    reason: string
  ): Promise<void | AxiosResponse<deleteRes>> {
    const data = {
      reason,
    };
    try {
      return RequestApiV2({
        method: "DELETE",
        url: algorithmController.deleteAlgorithm(idx),
        data: data,
        canHeader: true,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  reportAlgorithm(
    idx: number,
    reason: string
  ): Promise<void | AxiosResponse<reportRes>> {
    try {
      const data = {
        status: "REPORTED",
        reason,
      };
      return RequestApiV2({
        method: "PATCH",
        url: algorithmController.setStatusAlgorithm(idx),
        data: data,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  modifyAlgorithm(
    idx: number,
    title: string,
    content: string
  ): Promise<void | AxiosResponse<modifyRes>> {
    try {
      const data = {
        title,
        content,
      };
      return RequestApiV2({
        method: "PATCH",
        url: algorithmController.modifyAlgorithm(idx),
        data: data,
        canHeader: true,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  setStatusAlgorithm(
    idx: number,
    status = "ACCEPTED",
    reason = ""
  ): Promise<void | AxiosResponse<setStatusRes>> {
    try {
      const data = {
        status,
        reason,
      };
      return RequestApiV2({
        method: "PATCH",
        url: algorithmController.setStatusAlgorithm(idx),
        data: data,
        canHeader: true,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default new Algorithm();
