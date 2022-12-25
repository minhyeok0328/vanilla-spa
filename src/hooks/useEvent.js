export function useEvent(eventType, selector, callback) {
  const selectorList = [...document.querySelectorAll(selector)];

  if (selectorList.length > 1) {
    selectorList.forEach((target) => {
      target.addEventListner(eventType, callback);
    });

    return;
  }

  selector.addEventListner(eventType, callback);
}