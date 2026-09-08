const gameGrid = document.getElementById("gameGrid");

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function createGameCard(game, index) {
  const card = element("a", "card" + (game.featured ? " featured" : ""));
  card.href = game.url;
  const visual = element("div", "card-visual");
  const thumbnail = element("img", "thumb");
  thumbnail.src = game.thumbnail;
  thumbnail.alt = "";
  thumbnail.width = 640;
  thumbnail.height = 400;
  thumbnail.decoding = "async";
  if (!game.featured) thumbnail.loading = "lazy";
  const number = element("span", "card-number", String(index + 1).padStart(2, "0"));
  number.setAttribute("aria-hidden", "true");
  visual.append(thumbnail, number);

  const meta = element("div", "meta");
  const category = element("p", "game-category");
  if (game.featured) category.append(element("span", "new-badge", "NEW GAME"));
  category.append(element("span", "", game.category || "ARCADE"));
  const title = element("h2", "", game.title);
  const description = element("p", "description", game.description || "");
  const bottom = element("div", "card-bottom");
  const play = element("span", "play-label", "플레이하기");
  const arrow = element("span", "play-arrow", "↗");
  arrow.setAttribute("aria-hidden", "true");
  if (game.featured) {
    play.append(arrow);
    bottom.append(play);
    if (game.detail) bottom.append(element("span", "stage-tag", game.detail));
  } else {
    bottom.append(play, arrow);
  }
  meta.append(category, title, description, bottom);
  card.append(visual, meta);
  return card;
}

async function loadGames() {
  gameGrid.setAttribute("aria-busy", "true");
  try {
    const response = await fetch("games.json");
    if (!response.ok) throw new Error("Game list request failed");
    const games = await response.json();
    if (!Array.isArray(games)) throw new Error("Invalid game list");
    const content = document.createDocumentFragment();
    if (games.length === 0) {
      content.append(element("p", "load-state", "아직 등록된 게임이 없어요."));
    } else {
      games.forEach((game, index) => content.append(createGameCard(game, index)));
    }
    gameGrid.replaceChildren(content);
  } catch {
    const message = element("div", "load-state");
    message.setAttribute("role", "alert");
    message.append(element("p", "", "게임 목록을 불러오지 못했어요. 연결을 확인하고 다시 시도해 주세요."));
    const retry = element("button", "retry-button", "다시 불러오기");
    retry.type = "button";
    retry.addEventListener("click", () => { retry.disabled = true; loadGames(); });
    message.append(retry);
    gameGrid.replaceChildren(message);
  } finally {
    gameGrid.setAttribute("aria-busy", "false");
  }
}

loadGames();
