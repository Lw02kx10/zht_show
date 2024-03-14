export function getImageUrl (dir, name, ext) {
    return new URL(`../assets/${dir}/${name}${ext}`, import.meta.url).href;
}