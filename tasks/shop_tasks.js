"use strict";

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
    function () {
        document.getElementsByClassName('link-premium')[0].click();

        return 'internal-homepage';
    },
    function () {
        document.getElementsByName('productchoice')[0].submit();

        return 'standard-campaign-products';
    },
    function () {

        return 'standard-campaign-tab-1';
    },
    function () {
        document.getElementById('payment_tab_elv').click();

        return 'standard-campaign-tab-2';
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/0209afcc6131f3f8a8be3d7fd90d8652";

        return "0209afcc6131f3f8a8be3d7fd90d8652";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/175430e4d9ad09924f44f22f86c8797a";

        return "175430e4d9ad09924f44f22f86c8797a";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/fa021ae862f528e719dcdddb069eefd5";

        return "fa021ae862f528e719dcdddb069eefd5";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/c82bd5be1b78a8778904681642c9d0fd";

        return "c82bd5be1b78a8778904681642c9d0fd";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/f4633a78d74b1609bcdc128918fac56b";

        return "f4633a78d74b1609bcdc128918fac56b";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/e19dedaac284bc0e1aba838a363de1e5";

        return "e19dedaac284bc0e1aba838a363de1e5";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/058ea1b949e060e03c3f024c2d48d26c";

        return "058ea1b949e060e03c3f024c2d48d26c";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/3882e5732b766741aeb21a5547059c22";

        return "3882e5732b766741aeb21a5547059c22";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/9d681738b1bb4382b08e7ddfa951cf10";

        return "9d681738b1bb4382b08e7ddfa951cf10";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/a51f402d70536f1bf0d8399602347545";

        return "a51f402d70536f1bf0d8399602347545";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/d512b75d9a14cb7e4d6eda5b0c0742d4";

        return "d512b75d9a14cb7e4d6eda5b0c0742d4";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/263b0dd1c3e6d1ac9ab9b307ae483cb7";

        return "263b0dd1c3e6d1ac9ab9b307ae483cb7";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/8b3d74956a419882855b5d93daa20046";

        return "8b3d74956a419882855b5d93daa20046";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/b0776f1ebb75d99b4390ec9be44e1e69";

        return "b0776f1ebb75d99b4390ec9be44e1e69";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/6a68a55c4eae141f5fa9f72ee49122a4";

        return "6a68a55c4eae141f5fa9f72ee49122a4";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/c48149886f1a577a4f4cf10ca4f28472";

        return "c48149886f1a577a4f4cf10ca4f28472";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/e4dd2c53d42ed7eafcd91838be7d9e69";

        return "e4dd2c53d42ed7eafcd91838be7d9e69";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/a651c2edba037b57180a7c589b49a53e";

        return "a651c2edba037b57180a7c589b49a53e";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/3ef0e6cc5bbe345f378a219c38b3b289";

        return "3ef0e6cc5bbe345f378a219c38b3b289";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/2e62115f77d9cef758701e3463cec0b9";

        return "2e62115f77d9cef758701e3463cec0b9";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/47ffc76eaba3003aa87048bfce875ed4";

        return "47ffc76eaba3003aa87048bfce875ed4";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/2da7a5b371bc797024bc3255900b36f1";

        return "2da7a5b371bc797024bc3255900b36f1";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/95d207cc6e4540aa84b624e63610e8b6";

        return "95d207cc6e4540aa84b624e63610e8b6";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/079c60ebe6b7cf3f5bb540d8296b6b1c";

        return "079c60ebe6b7cf3f5bb540d8296b6b1c";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/83e57ef76860a0582881ee1d4295b5d9";

        return "83e57ef76860a0582881ee1d4295b5d9";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/6897b356a415f157a938945757581c8e";

        return "6897b356a415f157a938945757581c8e";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/0e0ea0f7328d9632778ce9c31ee51a82";

        return "0e0ea0f7328d9632778ce9c31ee51a82";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/4eb2b7ce5a358f30e02fb76c3c9eb07f";

        return "4eb2b7ce5a358f30e02fb76c3c9eb07f";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/2257f42ab9993da28fa028f9f8eb762b";

        return "2257f42ab9993da28fa028f9f8eb762b";
    },
    function (env) {
        window.location.href = env.BASE_URL + "/premium-mitgliedschaft/start/577565376c5e3ee311f82863724e6a05";

        return "577565376c5e3ee311f82863724e6a05";
    },
    function (env) {

    }
];

/**
 *
 * @constructor
 */
function ShopTasks() {
    this.steps = steps;
}

module.exports = ShopTasks;