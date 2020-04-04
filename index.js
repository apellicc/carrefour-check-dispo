var request = require('request-promise');
var moment = require('moment');
var alert = require('alert-node');
// var sys = require('sys');
var shell = require('shelljs');

function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
async function check() {
    console.log(moment().format('HH:mm'));
    var options = {
        'method': 'GET',
        'url': 'https://www.carrefour.fr/api/timeslotfinder?lat=48.971896&lng=2.256771999999999&date=2020-04-17T09%3A00%3A00.000%2B02%3A00',
        'headers': {
            'authority': 'www.carrefour.fr',
            'accept': 'application/json, text/plain, */*',
            'sec-fetch-dest': 'empty',
            'x-requested-with': 'XMLHttpRequest',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'referer': 'https://www.carrefour.fr/cart',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7',
            'cookie': 'visid_incap_441619=qtAddaAGS7yMByB3xuJNWGShb14AAAAAQUIPAAAAAADBGg2rRcXA9YmBrg/NNeXx; nlbi_441619=rqRnZAuVcRBLzVb1Jv8P3AAAAAAOB42MxNKZZZ/1Qy5KHstI; incap_ses_1175_441619=dXHoTmkqhCBxpN1O23BOENO1fF4AAAAA+k6G2b0gE7rim7GbjlsCOw==; visid_incap_1722501=9dysGBNoRi2/hlAIoz9Jf9S1fF4AAAAAQUIPAAAAAABA4gqXawBZoIhIubMqT9qd; incap_ses_1175_1722501=Ji7ebamU5HmRpN1O23BOENS1fF4AAAAAmQSM7Qql9b5XhlC3HkL+0g==; FRONTONE_USER=1587823318; FRONTONE_SESSION_ID=31dfdbfadf87295064690173efc499cd7b8731f3; cookieIDCrfOne=V12020326151580.17950225776859496; TCPID=120341515812081345935; TC_PRIVACY=0@064@ALL@; TC_PRIVACY_CENTER=ALL; _ga=GA1.2.582752414.1585231322; _cs_c=0; TCAUDIENCE=; FRONTAL_STORE=637; visid_incap_2237321=s2HoDmI+QySmsrQxtzWrVaG2fF4AAAAAQUIPAAAAAAA2yi1tZpQw5nG6ZbDxSB7C; incap_ses_1175_2237321=TPMnUfUNnTVqMN5O23BOEKG2fF4AAAAAMDEsZqB6XynKWCDLi01zHA==; _gid=GA1.2.391013135.1585757891; sto__vuid=e7e6330c339a762456ffe6eea3140e09; visid_incap_1267558=MsN7NOugQj2DU3nIH3zSz0qqhV4AAAAAQUIPAAAAAADZqv2ss0c2AJwcHQpjSXRs; incap_ses_1176_1267558=WPI4HItaSh4AKrP/S/5REEqqhV4AAAAAWm9ZaIVFuirolgGJprJm9w==; FRONTONE_SESSID=51ac719fcdbd56e7f12475091285af55; FRONTONE_SLOT=eyJjYXBhY2l0eU1heCI6MjUsImNhcGFjaXR5VXNlZCI6MCwiY3V0b2ZmIjoiMjAyMC0wNC0xMVQwMDowMDowMCswMjowMCIsImRhdGVCZWdpbiI6IjIwMjAtMDQtMTBUMDk6MzA6MDArMDI6MDAiLCJkYXRlRW5kIjoiMjAyMC0wNC0xMFQxMDowMDowMCswMjowMCIsImNhcGFNYXhEYXkiOjEwMCwiY2FwYVVzZWREYXkiOjEzLCJkZWxpdmVyeUZlZXNGbG9hdCI6MC4wLCJwcmVwYXJhdGlvbkZlZXNGbG9hdCI6MC4wLCJyZWYiOiI1MjU3ODE5MyIsInN0YXR1cyI6Ik9QRU4iLCJ0cmFuY2hlIjoiNUEifQ%3D%3D; incap_ses_1176_2237321=RLP6K0D3FzczBbT/S/5REJurhV4AAAAAvici1oCTIlJwsQZnwk1Hlg==; _gcl_au=1.1.1264116836.1585820133; incap_ses_1176_441619=91F+D6CVbTZLHMX/S/5REGHGhV4AAAAA6UBU6DMC8IVaa6hrmediaw==; incap_ses_1176_1722501=aRR/NiuhXC59HMX/S/5REGHGhV4AAAAAfIVsuxQOawv2keiCJrvdUg==; tc_cj_v2=%5Ecl_%5Dny%5B%5D%5D_mmZZZZZZKORORLOMQSORLZZZ%5D; QueueITAccepted-SDFrts345E-V3_prodevent=EventId%3Dprodevent%26QueueId%3Dd819fcd9-8975-4549-8b9d-90a3882a0499%26RedirectType%3Dsafetynet%26IssueTime%3D1585825379%26Hash%3D69f7af2b72f6e1131c5a157efe5370560ee89c0bdded6b2f0184006ab393f814; TCSESSION=20204413314832057705; sto__session=1585825381155; _cs_cvars=%7B%2220%22%3A%5B%22ABTasty%22%2C%22%5B564141%3D701409%5D%22%5D%7D; ADRUM=s=1585825400121&r=https%3A%2F%2Fwww.carrefour.fr%2Fcart%3F0; pageCounterCrfOne=83; ABTasty=uid%3D20032615015812612%26fst%3D1585231318751%26pst%3D1585818169452%26cst%3D1585825380806%26ns%3D4%26pvt%3D64%26pvis%3D3%26th%3D385031.495174.1.0.2.0.1585818169459.1585818169459.1_555990.692071.1.0.2.0.1585818169475.1585818169475.1_562227.699323.60.1.4.0.1585231318768.1585825380827.1_564141.701409.3.2.2.1.1585820125865.1585825402078.1_566820.704287.5.0.4.0.1585231318774.1585231545851.1_571233.708385.55.1.3.0.1585757891511.1585825380837.1; sto__count=2; _cs_id=f7b05cdc-77cc-a524-a8aa-cbe2d65c579b.1585231322.4.1585825407.1585825381.1.1619395322204.Lax.0; _cs_s=5.1; _gat_gtag_UA_3928615_46=1; FRONTONE_CONNECTED=1588417453; ABTastySession=sen%3D40__referrer%3D__landingPage%3Dhttps%3A//www.carrefour.fr/__referrerSent%3Dtrue',
            'Cookie': 'FRONTONE_CONNECTED=1588417591'
        }
    };

    const now = moment().hour(10).minute(00)

    while (now.isBefore(moment('2020-04-20'), 'day')) {
        // your localisation
        options.url = `https://www.carrefour.fr/api/timeslotfinder?lat=48.971896&lng=2.256771999999999&date=${now.format('YYYY-MM-DD')}T${now.format('HH')}%3A00%3A00.000%2B02%3A00`;
        try {
            const res = await request(options).json();
            console.log(now.format('YYYY-MM-DD'));
            console.log(JSON.stringify(res, '', 4))
            // alert('test', 'osascript');
            // res.data.stores[0] = {currentDriveType: 'drive'}
    
            // for check dispo drive
            if (res.data.filters.length > 0 || (res.data.stores.length > 0 && res.data.stores.findIndex(value => value.currentDriveType === 'drive') > -1)) {
                // debugger
                alert('gooooooallll', 'osascript');
                //for mac send sms
                shell.exec("osascript -l JavaScript ___dirname sendmessage.scpt", function(err, stdout, stderr) {
                    console.log('error', err);
                });
                await wait(10000)
            } else {
                await wait(10000)
                now.add(1, 'day')
            }
        } catch (e) {
            console.error(e)
            awaitwait(10000)
        }
    }
    /// for Delivery storeID your carrefour market
    options = {
        'method': 'GET',
        'url': 'https://www.carrefour.fr/api/firstslot?storeId=900722',
        'headers': {
          'authority': 'www.carrefour.fr',
          'accept': 'application/json, text/plain, */*',
          'sec-fetch-dest': 'empty',
          'x-requested-with': 'XMLHttpRequest',
          'adrum': 'isAjax:true',
          'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'cors',
          'referer': 'https://www.carrefour.fr/edito/tous-mobilises-pour-vous',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7',
          'cookie': 'visid_incap_441619=qtAddaAGS7yMByB3xuJNWGShb14AAAAAQUIPAAAAAADBGg2rRcXA9YmBrg/NNeXx; nlbi_441619=rqRnZAuVcRBLzVb1Jv8P3AAAAAAOB42MxNKZZZ/1Qy5KHstI; incap_ses_1175_441619=dXHoTmkqhCBxpN1O23BOENO1fF4AAAAA+k6G2b0gE7rim7GbjlsCOw==; visid_incap_1722501=9dysGBNoRi2/hlAIoz9Jf9S1fF4AAAAAQUIPAAAAAABA4gqXawBZoIhIubMqT9qd; incap_ses_1175_1722501=Ji7ebamU5HmRpN1O23BOENS1fF4AAAAAmQSM7Qql9b5XhlC3HkL+0g==; FRONTONE_USER=1587823318; FRONTONE_SESSION_ID=31dfdbfadf87295064690173efc499cd7b8731f3; cookieIDCrfOne=V12020326151580.17950225776859496; TCPID=120341515812081345935; TC_PRIVACY=0@064@ALL@; TC_PRIVACY_CENTER=ALL; _ga=GA1.2.582752414.1585231322; _cs_c=0; TCAUDIENCE=; FRONTAL_STORE=637; visid_incap_2237321=s2HoDmI+QySmsrQxtzWrVaG2fF4AAAAAQUIPAAAAAAA2yi1tZpQw5nG6ZbDxSB7C; incap_ses_1175_2237321=TPMnUfUNnTVqMN5O23BOEKG2fF4AAAAAMDEsZqB6XynKWCDLi01zHA==; _gid=GA1.2.391013135.1585757891; sto__vuid=e7e6330c339a762456ffe6eea3140e09; visid_incap_1267558=MsN7NOugQj2DU3nIH3zSz0qqhV4AAAAAQUIPAAAAAADZqv2ss0c2AJwcHQpjSXRs; FRONTONE_SESSID=51ac719fcdbd56e7f12475091285af55; FRONTONE_SLOT=eyJjYXBhY2l0eU1heCI6MjUsImNhcGFjaXR5VXNlZCI6MCwiY3V0b2ZmIjoiMjAyMC0wNC0xMVQwMDowMDowMCswMjowMCIsImRhdGVCZWdpbiI6IjIwMjAtMDQtMTBUMDk6MzA6MDArMDI6MDAiLCJkYXRlRW5kIjoiMjAyMC0wNC0xMFQxMDowMDowMCswMjowMCIsImNhcGFNYXhEYXkiOjEwMCwiY2FwYVVzZWREYXkiOjEzLCJkZWxpdmVyeUZlZXNGbG9hdCI6MC4wLCJwcmVwYXJhdGlvbkZlZXNGbG9hdCI6MC4wLCJyZWYiOiI1MjU3ODE5MyIsInN0YXR1cyI6Ik9QRU4iLCJ0cmFuY2hlIjoiNUEifQ%3D%3D; incap_ses_1176_2237321=RLP6K0D3FzczBbT/S/5REJurhV4AAAAAvici1oCTIlJwsQZnwk1Hlg==; _gcl_au=1.1.1264116836.1585820133; ADRUM=s=1585826479666&r=https%3A%2F%2Fwww.carrefour.fr%2Fcart%3F0; incap_ses_1176_441619=s64YZuk+hmP3kc7/S/5REEfVhV4AAAAANR0F6h3ZRvUMC6yuOFCbvg==; incap_ses_1176_1267558=PsFiDXuMoRuoZ9D/S/5REOLXhV4AAAAAoSXmQJfHX+skQxi5nQIm1w==; incap_ses_1176_1722501=40UiAQRCpGrpatD/S/5REObXhV4AAAAA0P527oA53cFFyQfoN+uwXw==; tc_cj_v2=%5Ecl_%5Dny%5B%5D%5D_mmZZZZZZKORORLSRPMJRLZZZ%5D; QueueITAccepted-SDFrts345E-V3_prodevent=EventId%3Dprodevent%26QueueId%3Dbc0abf49-2781-44d6-9796-bd7938d4e93a%26RedirectType%3Dsafetynet%26IssueTime%3D1585829863%26Hash%3Dd2202939b83b75f8c13ff0e5611699a49b7a838be4b41151e6a18eed18ad47f5; TCSESSION=2020441417445947617963; sto__session=1585829864511; pageCounterCrfOne=86; ABTasty=uid%3D20032615015812612%26fst%3D1585231318751%26pst%3D1585825380806%26cst%3D1585829863517%26ns%3D5%26pvt%3D67%26pvis%3D2%26th%3D385031.495174.1.0.3.0.1585818169459.1585818169459.1_555990.692071.1.0.3.0.1585818169475.1585818169475.1_562227.699323.63.2.5.1.1585231318768.1585830083159.1_564141.701409.3.0.3.0.1585820125865.1585825402078.1_566820.704287.5.0.5.0.1585231318774.1585231545851.1_571233.708385.58.2.4.1.1585757891511.1585830083169.1; sto__count=1; _cs_cvars=%7B%2220%22%3A%5B%22ABTasty%22%2C%22%5B562227%3D699323%5D%5B571233%3D708385%5D%22%5D%7D; _cs_id=f7b05cdc-77cc-a524-a8aa-cbe2d65c579b.1585231322.5.1585830083.1585829186.1.1619395322204.Lax.0; _cs_s=3.1; _gat_gtag_UA_3928615_46=1; ABTastySession=sen%3D29__referrer%3D__landingPage%3Dhttps%3A//www.carrefour.fr/__referrerSent%3Dtrue; FRONTONE_CONNECTED=1588422129',
          'Cookie': 'FRONTONE_CONNECTED=1588417591'
        }
    };
    try {
        const res = await request(options).json()
        wait(10000)
        console.log(JSON.stringify(res, '', 4))
        if (res && (res.lenght > 0 || Object.keys(res).length > 0)) {
            alert('gooooooallll', 'osascript');
            //for mac send sms

            shell.exec("osascript -l JavaScript /Users/apellicc/carrefour-check-date-drive/sendmessage.scpt", function(err, stdout, stderr) {
                console.log('error', err);
            });
            await wait(10000)
        }
    } catch (e) {
        await wait(10000)

        console.error(e);

    }
    
}
check();
setInterval(() => check(), 600000)

