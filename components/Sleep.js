export default function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}