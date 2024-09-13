/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProcessedPostService } from "../processedPost.service";
import { ProcessedPostCreateInput } from "./ProcessedPostCreateInput";
import { ProcessedPost } from "./ProcessedPost";
import { ProcessedPostFindManyArgs } from "./ProcessedPostFindManyArgs";
import { ProcessedPostWhereUniqueInput } from "./ProcessedPostWhereUniqueInput";
import { ProcessedPostUpdateInput } from "./ProcessedPostUpdateInput";

export class ProcessedPostControllerBase {
  constructor(protected readonly service: ProcessedPostService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProcessedPost })
  async createProcessedPost(
    @common.Body() data: ProcessedPostCreateInput
  ): Promise<ProcessedPost> {
    return await this.service.createProcessedPost({
      data: data,
      select: {
        authorName: true,
        content: true,
        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ProcessedPost] })
  @ApiNestedQuery(ProcessedPostFindManyArgs)
  async processedPosts(
    @common.Req() request: Request
  ): Promise<ProcessedPost[]> {
    const args = plainToClass(ProcessedPostFindManyArgs, request.query);
    return this.service.processedPosts({
      ...args,
      select: {
        authorName: true,
        content: true,
        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProcessedPost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async processedPost(
    @common.Param() params: ProcessedPostWhereUniqueInput
  ): Promise<ProcessedPost | null> {
    const result = await this.service.processedPost({
      where: params,
      select: {
        authorName: true,
        content: true,
        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ProcessedPost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProcessedPost(
    @common.Param() params: ProcessedPostWhereUniqueInput,
    @common.Body() data: ProcessedPostUpdateInput
  ): Promise<ProcessedPost | null> {
    try {
      return await this.service.updateProcessedPost({
        where: params,
        data: data,
        select: {
          authorName: true,
          content: true,
          createdAt: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ProcessedPost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProcessedPost(
    @common.Param() params: ProcessedPostWhereUniqueInput
  ): Promise<ProcessedPost | null> {
    try {
      return await this.service.deleteProcessedPost({
        where: params,
        select: {
          authorName: true,
          content: true,
          createdAt: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
