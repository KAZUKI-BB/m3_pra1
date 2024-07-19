export const login = async (username, password) => {

    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         if (username === 'user' && password === 'password') {
    //             resolve({ token: 'dummy-token' });
    //         } else {
    //             reject(new Error('The username or password is incorrect.'));
    //         }
    //     }, 1000);
    // });

    //即時処理しないといけないタイプの認証処理
    // return fetch('localhost:3001/api/auth/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json' //josnで送る
    //     },
    //     body: JSON.stringify({ username, password }) //JSON.stringifyで文字列化して渡す
    // })
    //     .then(response => { //fetchから帰ってきたpromiseオブジェクトに対する即時処理
    //         if (!response.ok) { //認証の成否の分岐
    //             return response.json().then(err => {
    //                 throw new Error(err.message || 'The username or password is incorrect.');
    //             });
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         return data;
    //     })

    //await使って即時処理じゃなくていいタイプの認証処理
    try {
        const res = await fetch('http://localhost:3001/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })

        if (!res.ok) {
            return false
        }

        const data = await res.json()
        return data
    } catch (e) {
        console.error(e)
    }

    return false
};