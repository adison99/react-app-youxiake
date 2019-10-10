import http from "@utils/http"

export const user_data=()=>http.get("/api/api/lines/userrecommends",{})