import { VIACEP } from "@/utils/back_end_urls/urls";

export default async function PostRequest(param: any){
    var response: any = await fetch(VIACEP(param), {
      method: "GET",
    });

    const data: any = await response.json();
    return data;
}