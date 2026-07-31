/*
 * Default app layout constants
 */
export const SCREEN_HEIGHT = "100dvh";
export const NAVBAR_HEIGHT = "100px";
export const HERO_HEIGHT = `calc(${SCREEN_HEIGHT} - ${NAVBAR_HEIGHT})`;
export const HERO_MOBILE_MT = "10dvh";
export const SCROLL_OFFSET = 50;
export const SCROLL_ACTIVE_SECTION_BOUNDARY = parseInt(
  NAVBAR_HEIGHT.replace("px", ""),
);
