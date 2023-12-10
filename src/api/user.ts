import request from "@/utils/request";

export const postData = (data: any) => {
  return request<any>({
    url: "/user/login", // mock接口
    method: "post",
    data,
  });
};

export const getData = (queryParams:any) => {
  return request<any>({
    url: "/user/info", // mock接口
    method: "get",
    params:queryParams
  });
};


export function importFile(deptId: number,file: File) {
    const formData = new FormData();
    formData.append("file", file);
    return request({
      url: "/api/v1/users/_import",
      method: "post",
      params: { deptId: deptId },
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
}
