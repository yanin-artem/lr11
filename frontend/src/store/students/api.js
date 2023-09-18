import Api from "@/api/index";

class Students extends Api {
  /**
   * Вернет список всех студентов
   * @returns {Promise<Response>}
   */
  students = () =>
    this.rest("/students/list.json", {
      method: "GET",
    });

  /**
   * Вернет отфлильтрованный список работ
   * @param students объект работы, взятый из FormStudent
   * @returns {Promise<*>}
   */
  filter = (type_id) =>
    this.rest("/students/list-filtred.json", {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: "id=" + type_id,
    });

  /**
   * Удалит работу по id
   * @param id
   * @returns {Promise<*>}
   */
  remove = (id) =>
    this.rest("/students/delete-item", {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: "id=" + JSON.stringify(id),
    }).then(() => id); // then - заглушка, пока метод ничего не возвращает

  /**
   * Создаст новую запись в таблице
   * @param students объект работы, взятый из FormStudents
   * @returns {Promise<Response>}
   */
  add = (students) =>
    this.rest("/students/add-item", {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: "students=" + JSON.stringify(students),
    }).then(() => students); // then - заглушка, пока метод ничего не возвращает

  /**
   * Отправит измененную запись
   * @param students объект работы, взятый из FormStudent
   * @returns {Promise<*>}
   */
  update = (students) =>
    this.rest("/students/update-item", {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: "students=" + JSON.stringify(students),
    }).then(() => students);
}

export default new Students();
