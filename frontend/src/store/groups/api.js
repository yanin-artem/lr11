import Api from "@/api/index";

class Groups extends Api {
  /**
   * Вернет список всех групп
   * @returns {Promise<Response>}
   */
  groups = () => this.rest("/groups/list.json");

  /**
   * Удалит группу по id
   * @param id
   * @returns {Promise<*>}
   */
  remove = (id) => {
    console.log(id);
    this.rest("/groups/delete-item", {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: "group=" + JSON.stringify({ id }),
    }).then(() => id); // then - заглушка, пока метод ничего не возвращает
  };

  /**
   * Создаст новую запись в таблице
   * @param group объект группы, взятый из GroupGroup
   * @returns {Promise<Response>}
   */
  add = (group) =>
    this.rest("/groups/add-item", {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: "group=" + JSON.stringify(group),
    }).then(() => group); // then - заглушка, пока метод ничего не возвращает

  /**
   * Отправит измененную запись
   * @param group объект группы, взятый из GroupGroup
   * @returns {Promise<*>}
   */
  update = (group) =>
    this.rest("/groups/update-item", {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: "group=" + JSON.stringify(group),
    }).then(() => group); // then - заглушка, пока метод ничего не возвращает
}

export default new Groups();
