import { executeQuery } from './db';

export default function handler(req, res) {
    // DESC(내림차순), ASC(오름차순)
    const { method, body } = req;

    const selectGiftData = async () => {
        try {
            let data = await executeQuery('select * from GiftList where UserID=2 order by UserID DESC', []);
            res.json(data)
        } catch (err) {
            res.send(err);
        }
    }

    const insertGiftData = async () => {
        let { UserID, title, image, price, state } = body;

        let data = await executeQuery(
            'insert into teamDbProductList (UserID,title,image,price,state) value (?,?,?,?,?)',
            // 0 : true / 1 : false // true(1)면 선물완료니까 기본값으로 false(0)
            [UserID, title, image, price, state]
        );
        res.json(data)
    }

    switch (method) {
        case "GET": selectGiftData(); break;
        case "POST": insertGiftData(); break;
    }
}

//  #2.  method를 통해, 접속하는데 *(전체) from teamDbList(지정한 db파일이름)

///////////////////////////////////////////////








////////////////////////////////////////////////////