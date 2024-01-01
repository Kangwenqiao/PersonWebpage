// 动画模块
var iUp = (function () {
    var time = 0,
        duration = 150,
        clean = function () {
            time = 0;
        },
        up = function (element) {
            setTimeout(function () {
                element.classList.add("up");
            }, time);
            time += duration;
        },
        down = function (element) {
            element.classList.remove("up");
        },
        toggle = function (element) {
            setTimeout(function () {
                element.classList.toggle("up");
            }, time);
            time += duration;
        };
    return {
        clean: clean,
        up: up,
        down: down,
        toggle: toggle
    };
})();

// 将本地图片设置为背景
function getLocalImages(imagePaths) {
    var indexName = "local-image-index";
    var index = sessionStorage.getItem(indexName);
    var panel = document.querySelector('#panel');

    if (isNaN(index) || index >= imagePaths.length) {
        index = 0;
    }

    var imagePath = imagePaths[index];
    var imageUrl = "assets/js/images/" + imagePath; // 更新为实际路径

    panel.style.background = "url('" + imageUrl + "') center center no-repeat #666";
    panel.style.backgroundSize = "cover";

    sessionStorage.setItem(indexName, ++index);
}

// 当DOM加载完成时执行
document.addEventListener('DOMContentLoaded', function () {

    // 使用本地图片路径的示例
    getLocalImages([
        "image1.png",
        "image2.png",
        "image3.png",
        // 根据需要添加更多图片路径
    ]);

    // 应用动画
    var iUpElements = document.querySelectorAll(".iUp");
    iUpElements.forEach(function (element) {
        iUp.up(element);
    });

    // 头像加载完成后添加show类
    var avatarElement = document.querySelector(".js-avatar");
    avatarElement.addEventListener('load', function () {
        avatarElement.classList.add("show");
    });
});

// 移动菜单切换
var btnMobileMenu = document.querySelector('.btn-mobile-menu__icon');
var navigationWrapper = document.querySelector('.navigation-wrapper');

btnMobileMenu.addEventListener('click', function () {
    if (navigationWrapper.style.display == "block") {
        navigationWrapper.addEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            navigationWrapper.classList.toggle('visible');
            navigationWrapper.classList.toggle('animated');
            navigationWrapper.classList.toggle('bounceOutUp');
            navigationWrapper.removeEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', arguments.callee);
        });
        navigationWrapper.classList.toggle('animated');
        navigationWrapper.classList.toggle('bounceInDown');
        navigationWrapper.classList.toggle('animated');
        navigationWrapper.classList.toggle('bounceOutUp');
    } else {
        navigationWrapper.classList.toggle('visible');
        navigationWrapper.classList.toggle('animated');
        navigationWrapper.classList.toggle('bounceInDown');
    }
    btnMobileMenu.classList.toggle('social');
    btnMobileMenu.classList.toggle('iconfont');
    btnMobileMenu.classList.toggle('icon-list');
    btnMobileMenu.classList.toggle('social');
    btnMobileMenu.classList.toggle('iconfont');
    btnMobileMenu.classList.toggle('icon-angleup');
    btnMobileMenu.classList.toggle('animated');
    btnMobileMenu.classList.toggle('fadeIn');
});
