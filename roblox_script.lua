local HttpService = game:GetService("HttpService")
local serverUrl = "http://your-server-url"

local function fetchData()
    local url = serverUrl .. "/data"
    local response = HttpService:GetAsync(url)
    local data = HttpService:JSONDecode(response)
    for _, item in ipairs(data) do
        print("Username: " .. item.username .. ", Score: " .. item.score)
    end
end

fetchData()