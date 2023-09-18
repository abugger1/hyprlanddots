local wezterm = require 'wezterm'

local colors = wezterm.color.extract_colors_from_image '$wallpaper'
local ansi = {}
local brights = {}

for idx, color in inpairs(colors) do
  if idx <= 8 then
    ansi[idx] = color
  end
end

return {
  colors = {
    ansi = ansi,
    brights = brights,
  },

}
