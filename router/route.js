<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="ECE568Group1" content="shopping_mall">
    <title>前端路由</title>
    <style type="text/css">
        .router_box,
        #router-view {
            padding: 0 20px;
            background-color: gainsboro;
            height: 55px;
            line-height: 50px;
        }

        .router_box>a {
            padding: 0 10px;
            color: #364086;
        }

        .content{
            border: 1px solid #a030b3;
        }
    </style>
</head>

<body>
    <div class="router_box">
        <a href="/getProducts" class="router">getProducts</a>
        <a href="/addProduct" class="router">addProduct</a>
        <a href="/updateProduct" class="router">updateProduct</a>
        <a href="/deleteProduct" class="router">deleteProduct</a>
    </div>
    <div class="content">
        <iframe name="mainiframe" src="" id="mainiframe" scrolling="no" onload="" frameborder="0" width="100%"></iframe>
    </div>
    <script type="text/javascript">
        (function (win, undefined) {
            function Router(parames) {
                if (!(this instanceof Router)) {
                    return new Router(arguments)
                }
                let router = {};
                router.routes = parames.routes || [];
                router.target = parames.target || "";
                router.index = parames.index || "";

                this.loadIndex(router);

                document.querySelectorAll(".router").forEach((item, index) => {
                    item.addEventListener("click", function (e) {
                        let event = e || win.event;
                        event.preventDefault();
                        win.location.href = `#${this.getAttribute("href")}`;
                    }, false);
                });

                win.addEventListener("hashchange", function () {
                    this.routerLoad(router);
                }.bind(this));
            };

            Router.prototype = {
                routerLoad:  router => {
                    let nowHash = win.location.hash;
                    let index = router.routes.findIndex((item, index) => {
                        return nowHash == ('#' + item.path);
                    });
                    document.querySelector(`${router.target}`).src = router.routes[index].component;
                },
                loadIndex:  router => {
                    document.querySelector(`${router.target}`).src = router.index;
                }
            }
            win.Router = Router;
        })(window, undefined)

        new Router({
            target: '#mainiframe',
            index: '../controller/product.html',
            routes: [{
                    path: '/getProducts',
                    component: '/static/templates/getProducts.html'
                },
                {
                    path: '/addProduct',
                    component: '/static/templates/addProduct.html'
                },
                {
                    path: '/updateProduct',
                    component: '/static/templates/updateProduct.html'
                },
                {
                    path: '/deleteProduct',
                    component: '/static/templates/deleteProduct.html'
                }
            ]
        });
    </script>
</body>

</html>
