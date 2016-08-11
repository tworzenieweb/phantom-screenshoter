"use strict";

var campaigns = {
    "0e0ea0f7328d9632778ce9c31ee51a82": "Offer|3|Send-Profile-To-Headhunters|0m1m-062015",
    "6897b356a415f157a938945757581c8e": "Standard|3|5-Products|072013",
    "83e57ef76860a0582881ee1d4295b5d9": "Headhunter-Recommendations|3|5-Products|012014",
    "c48149886f1a577a4f4cf10ca4f28472": "Offer|2|Starter-Package|Coupon-100-6M6M-082014",
    "e4dd2c53d42ed7eafcd91838be7d9e69": "Offer|2|Welcome-Gift|Discount-50-12M12M-082014",
    "3a46772a298dcf5a4efdcec10bf7242e": "Aktion 08/2014 (50% Preisnachlass, 2 Produkte)",
    "a651c2edba037b57180a7c589b49a53e": "Standard|3|5-Products|082014",
    "8c5d407d3fbb5f99daffbff72e9d5718": "Aktion 09/2014 (3 in 6)",
    "3ef0e6cc5bbe345f378a219c38b3b289": "Offer|2|2-Products|Discount-50-3M3M-12M12M-102014",
    "2e62115f77d9cef758701e3463cec0b9": "Offer|2|1-Product-Advanced|Discount-50-3M6M-102014",
    "63c2019d680aa5d36fd4f26112c9ad94": "Aktion 10/2014",
    "47ffc76eaba3003aa87048bfce875ed4": "Headhunter-Suchverhalten 10/2014",
    "2da7a5b371bc797024bc3255900b36f1": "Headhunter-Matches|3|4-Products|102014",
    "95d207cc6e4540aa84b624e63610e8b6": "Headhunter Match 10/2014",
    "079c60ebe6b7cf3f5bb540d8296b6b1c": "Herkunftsjob 10/2014",
    "6a68a55c4eae141f5fa9f72ee49122a4": "Topjob 10/2014",
    "b0776f1ebb75d99b4390ec9be44e1e69": "Gehaltsbenchmarks 10/2014",
    "8b3d74956a419882855b5d93daa20046": "Erster Premium-Job 10/2014",
    "1be260bec37973d3a1e2015b2bb2bac7": "Aktion 01/2015 (100 EUR Gutschein auf 6M)",
    "7f864cd461200b91bf40b077bda6db85": "Aktion 02/2015 (100 EUR Gutschein auf 6M)",
    "67af7c59b29969f30760ad3fdd3f0d1f": "Aktion 03/2015 (100 EUR Gutschein auf 6M)",
    "e078b0b6345902e354b4e66d3c249bb8": "Aktion 04/2015 (100 EUR Gutschein auf 6M)",
    "8b71489ad714f80e58203586247a7bfd": "Aktion 05/2015 (25% auf 3, 6, 12 und 24M)",
    "0bdf77c3a9351b959f0c61931e102689": "Aktion 06/2015 (3,6, 12 und 24M)",
    "263b0dd1c3e6d1ac9ab9b307ae483cb7": "Offer|3|Personalised-Link|Discount-25-4-products-072015",
    "217c75ebf429f3b5e3a2224b3f439bf2": "Offer|3|Promotion-072015|Discount-4-Products",
    "d512b75d9a14cb7e4d6eda5b0c0742d4": "Offer|2|Bestseller|Discount-50-12M12M-072015",
    "699bbaffbbc952c9dfdf05bf489c3c4d": "Offer|3|Promotion-082015|Discount-4-Products",
    "9d681738b1bb4382b08e7ddfa951cf10": "Offer|2|Jump-Start|Coupon-100-6M6M-082015",
    "a51f402d70536f1bf0d8399602347545": "Offer|3|Cheapest-Offer|Discount-4-Products-082015",
    "e19dedaac284bc0e1aba838a363de1e5": "Standard|3|5-Products|092015",
    "86569fa329b8f08ca7260314b4fbacf7": "Offer|3|Promotion-102015-2|Discount-4-Products",
    "058ea1b949e060e03c3f024c2d48d26c": "Offer|3|Personalised|Discount-25-4-Products-102015",
    "3882e5732b766741aeb21a5547059c22": "Standard|3|5-Products|102015",
    "425ce02c63ec4b7f72ac8916c832ee51": "Offer|3|Promotion-112015|Discount-4-Products",
    "a4387c3f52eaa2497fcbdb20108dfb47": "Offer|3|Promotion-122015|Discount-4-Products",
    "b1a6242574e264cd95d4423dced8d0a2": "Offer|Promotion-012016|Discount-60-12M12M",
    "f4633a78d74b1609bcdc128918fac56b": "Premium-Job|3|5-Products|122015",
    "c82bd5be1b78a8778904681642c9d0fd": "Premium-Job|3|5-Products|122015",
    "fa021ae862f528e719dcdddb069eefd5": "Offer|2|Welcome-Gift|Discount-50-12m12m-012016",
    "175430e4d9ad09924f44f22f86c8797a": "Offer|2|Welcome-Gift-Personal|Discount-50-12m12m-012016",
    "0209afcc6131f3f8a8be3d7fd90d8652": "Headhunter-Contact-Request|3|5-Products|022016",
    "692d8aa955fee0f7b5d718ffd68791ec": "Offer|Promotion-022016A|Discount-75-14D3M",
    "cc7d68e70400dba8a2724cc8d7de6d74": "Offer|Promotion-022016B|Discount-50-6M6M",
    "263dcfc40d2302e64408671d137913fc": "Offer|Promotion-022016C|Discount-60-12M12M",
    "43e405910e80330e670abe9312cfb82e": "Offer|2|Promotion-032016|Discount-50-6M6M",
    "4eb2b7ce5a358f30e02fb76c3c9eb07f": "Offer|3|Promotion-042016|Discount-50-4-Products",
    "2257f42ab9993da28fa028f9f8eb762b": "Standard|3|5-Products|022016",
    "577565376c5e3ee311f82863724e6a05": "Standard|3|5-Products|032016",
    "a28a71dc764cee25dc3af3e340d34290": "Offer|3|Promotion-052016|Discount-50-4-Products",
    "6522140ec55a2f3e53520ec42153c6e4": "Offer|3|Promotion-052016B|Discount-50-4-Products",
    "cd2c02c6afeb7f4d182ce7a06373be82": "Standard|3|5-Products|042016",
    "42f7d259065fc766eb348b405310056e": "Offer|3|Promotion-062016|Discount-50-4-Products",
    "ee85cefa174f5287dc2c91c22b74f41e": "Offer|Promotion-072016|Discount-50-6M6M",
    "61f0d57b98c293c67703069d11a6e6b4": "Headhunter-Matches|3|5-Products|052016"
}

var steps = [
    // login
    function (env) {
        document.cookie ="jobleads-qa=true";
        var style = document.createElement('style'),
            text = document.createTextNode('html { background: #fff }');
        style.setAttribute('type', 'text/css');
        style.appendChild(text);
        document.head.insertBefore(style, document.head.firstChild);

        document.getElementById('user_name').value = env.JOBLEADS_USER;
        document.getElementById('user_password').value = env.JOBLEADS_PASSWORD;
        document.getElementById('login').submit();

        return 'homepage';
    },
    // standard campaign
    function (env) {
        document.getElementsByClassName('link-premium')[0].click();

        return 'internal-homepage';
    },
    function (env) {
        document.getElementsByName('productchoice')[0].submit();

        return 'standard-campaign-products';
    },
    function (env) {

        return 'standard-campaign-tab-1';
    },
    function (env) {
        document.getElementById('payment_tab_elv').click();
        return 'standard-campaign-tab-2';
    }
];
for (var first in campaigns) { break; }
var prev = first;
for (var key in campaigns) {
    var campaignNormalized = campaigns[prev].replace(/[\s\/\\]/g, '');
    var campaignNext = campaigns[key].replace(/[\s\/\\]/g, '');

    steps.push(new Function('env',`window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/${key}"; return "${campaignNormalized}_payment"`));
    steps.push(new Function('env',`return "${campaignNext}"`));
    steps.push(new Function('env',`
            if (document.getElementsByClassName('productchoice__button').length) {
                button = document.getElementsByClassName('productchoice__button')[0].click(); 
            }
            
            if (document.getElementsByClassName('formToogleButton').length) {
                button = document.getElementsByClassName('formToogleButton')[0].click(); 
            }
    `));

    prev = key;
}

/**
 *
 * @constructor
 */
function ShopTasks() {
    this.steps = steps;
}

module.exports = ShopTasks;