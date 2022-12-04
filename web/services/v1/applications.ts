///////////////////////////////////////////////////////////////////////
//                                                                   //
// this file is autogenerated by service-generate                    //
// do not edit this file manually                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
/// <reference path = "api-auto.d.ts" />
import request from "@/utils/request";

/**
 * Create a new application
 */
export async function ApplicationsControllerCreate(
  params: Definitions.CreateApplicationDto | any,
  extra?: { [key: string]: any },
): Promise<Paths.ApplicationsControllerCreate.Responses> {
  // /v1/applications
  return request(`/v1/applications`, {
    method: "POST",
    data: params,
    ...(extra || {}),
  });
}

/**
 * Get user application list
 */
export async function ApplicationsControllerFindAll(
  params: Paths.ApplicationsControllerFindAll.BodyParameters | any,
  extra?: { [key: string]: any },
): Promise<Paths.ApplicationsControllerFindAll.Responses> {
  // /v1/applications
  return request(`/v1/applications`, {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * Get an application by appid
 */
export async function ApplicationsControllerFindOne(
  params: Paths.ApplicationsControllerFindOne.BodyParameters | any,
  extra?: { [key: string]: any },
): Promise<Paths.ApplicationsControllerFindOne.Responses> {
  // /v1/applications/{appid}
  return request(`/v1/applications/${params.appid}`, {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * Update an application
 */
export async function ApplicationsControllerUpdate(
  params: Definitions.UpdateApplicationDto | any,
  extra?: { [key: string]: any },
): Promise<Paths.ApplicationsControllerUpdate.Responses> {
  // /v1/applications/{appid}
  return request(`/v1/applications/${params.appid}`, {
    method: "PATCH",
    data: params,
    ...(extra || {}),
  });
}

/**
 * Delete an application
 */
export async function ApplicationsControllerRemove(
  params: Paths.ApplicationsControllerRemove.BodyParameters | any,
  extra?: { [key: string]: any },
): Promise<Paths.ApplicationsControllerRemove.Responses> {
  // /v1/applications/{appid}
  return request(`/v1/applications/${params.appid}`, {
    method: "DELETE",
    data: params,
    ...(extra || {}),
  });
}