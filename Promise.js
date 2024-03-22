const myPromise = new Promise ((resolve, reject) =>{
    //Xử lí logic đồng bộ
    //vd: lấy danh sách KH từ database, tồn thời gian để lấy
    //Trạng thái lúc này :pending

    const result= true;

    if (result) {   //Hoàn thành thành công == fulfilled
        resolve([
            {id: 1, name: "A"},
            {id: 2, name: "B"},
        ]); //Giải quyết Promise với giá trị thành công
    } else {
        reject("error");  //Từ chối Promise và trả về lỗi == rejected
    }
    });

    myPromise
    .then ((data) =>{ console.log(data);})  //khi thanh cong
    .catch((err) => console.log(err)) //khi that bai
    .finally(() => {
        //Luon luon thuc hien du ket qua loi hay thanh cong
        console.log("finally");
    });