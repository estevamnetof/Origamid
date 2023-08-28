function $(seletor: 'video'): HTMLVideoElement | null;
function $(seletor: 'div'): HTMLDivElement | null;
function $(seletor: 'a'): HTMLAnchorElement | null;
function $(seletor: string): Element | null;
function $(seletor: string): Element | null {
    return document.querySelector(seletor);
}

$('a')?.href;
$('video')?.volume;
$('.teste')?.innerHTML;