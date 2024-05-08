import { useEffect } from "react";
import { uniq, times, random, omit, pick } from "lodash";
import keyBy from "lodash/keyBy";
const TestLodash = () => {
  useEffect(() => {
    // 取不重複的值
    {
      let array = [1, 2, 2, 3, 4, 4, 5];
      let uniqueArray = uniq(array);
    }

    // 取指定個數的值
    // 隨機數字
    {
      let randomNumber = random(1, 100);
      // console.log(randomNumber);

      let user = { name: "John", age: 30, city: "New York" };
      let updatedUser = omit(user, "age");
      // console.log(updatedUser);
    }

    // 取得物件中指定key value
    {
      let user = { name: "John", age: 30, city: "New York" };
      let pickedUser = pick(user, ["name", "city"]);
      //   console.log(pickedUser);
    }

    {
      // ! Convert the an array into object, using  key of choice
      let users = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Anne" },
      ];
      let usersById = keyBy(users, "name");
      //   console.log(usersById);

      // ! 用原生語法達成
      users.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      let usersByName = {};
      users.forEach((user, index) => {
        usersByName[index] = user;
      });
      //   console.log(usersByName);
    }

    {
      // ! 把陣列中的null undefined NaN 空值去掉
      //  可使用lodash compact函式

      // 或原生語法
      let array = [1, null, 2, undefined, "", 3, NaN, 4];
      //   Boolean函式會把所有元素轉為bool值
      let filteredArray = array.filter(Boolean);
      //   console.log(filteredArray);
    }
  }, []);

  return <div></div>;
};

export default TestLodash;
