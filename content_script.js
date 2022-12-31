const TEXT_SUGESTIONS = "Sugerencia para ti";
const TEXT_SUGESTIONS_HIDDEN = "Sugerencia oculta";
const TEXT_REELS = "Reels y vídeos cortos";
const TEXT_REELS_HIDDEN = "Reel oculto";

const removeSugerenciasParaTi = () => {
  const xpath = "//span[text()='" + TEXT_SUGESTIONS + "']";
  var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  while (matchingElement) {
    matchingElement.innerHTML = TEXT_SUGESTIONS_HIDDEN
    matchingElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display="none";
    matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }
}

const removeReelsYVideosCortos = () => {
  const xpath = "//span[text()='" + TEXT_REELS + "']";
  var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  while (matchingElement) {
    matchingElement.innerHTML = TEXT_REELS_HIDDEN
    matchingElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display="none";
    matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }
}

document.addEventListener('DOMNodeInserted', removeSugerenciasParaTi);
document.addEventListener('DOMNodeInserted', removeReelsYVideosCortos);