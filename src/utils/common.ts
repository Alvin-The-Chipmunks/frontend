export function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function addNewLines(string: string) {
    return string.replace(/\. /g, ".\n");
}
