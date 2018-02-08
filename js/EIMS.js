var EIMS = E = {
    $: window.Zepto,
    settings: {
        //自定义动画时的默认动画时间
        transitionTime: 250,
        //自定义动画时的默认动画函数
        transitionTimingFunc: 'ease-in',
        //toast 持续时间,默认为2s
        toastDuration: 2000
    },
    launch: function () {
        E.Element.init();
        E.Element.scroll('article');
        E.Element.toast('div');
        E.Element.dialog('div');
        E.Selected.init();
        E.preventDefault();
        E.subTypemore();
        E.openShowsub();
    }
};


/**
* 实例一些公用操作
*/
E.Element = (function ($) {
    var SELECTOR = {
        'scroll': '[data-scroll="true"]',
        'toast': '[data-toast="true"]',
        'dialoginit': '[data-dialoginit="true"]',
        'radio': '[data-radio]',
        'checkbox': '[data-checkbox]',
        'active': '[data-active]'
    }

    /**
    * 初始化容器内组件
    * @param {String} 父元素的css选择器
    * @param {Object} 父元素或者父元素的zepto实例
    */
    var init = function (selector) {
        var $el = $(selector || 'body');
        if ($el.length == 0) return;
        $.map(_getMatchElements($el, SELECTOR.radio), _init_radio);
        $.map(_getMatchElements($el, SELECTOR.active), _init_active);
        $.map(_getMatchElements($el, SELECTOR.checkbox), _init_checkbox);
        //$.map(_getMatchElements($el,SELECTOR.inputnumer),_init_inputnumer);
    }

    /**
    * 自身与子集相结合
    */
    var _getMatchElements = function ($el, selector) {
        return $el.find(selector).add($el.filter(selector));
    }
    /**
    * 初始化iscroll组件或容器内iscroll组件
    */
    var initScroll = function (selector) {
        $.map(_getMatchElements($(selector), SELECTOR.scroll), function (el) {

            /**
            *针对黄有龙项目而写,用于计算内容滚动区域
            */
            var h = $(window).height(),
           fth = $(".ftNav").height(),
           Jh = $("#Jselected").height() == null ? 0 : $("#Jselected").height(),
           navh = $("#navigator").height() == null ? 0 : $("#navigator").height(),
           liBottom = $("#liBottom").height() == null ? 0 : $("#liBottom").height() - 10,
           ah = $("#announcement").height() == null ? 0 : $("#announcement").height(),
           nTop = $("#nTop").height() == null ? 0 : $("#nTop").height(),
           Jsh = Jh == 0 ? 0 : Jh + 20,
           articleH = h - 45 - navh - nTop - Jsh - fth - ah - liBottom;
            $(selector).css({ "height": articleH })
            $(selector).iScroll({ bounce: false, vScroll: true, checkDOMChanges: true });
        });
    }
    /**
    * 初始化toast
    */
    var toast = function (selector) {
        $.map(_getMatchElements($(selector), SELECTOR.toast), function (el) { E.Toast.init() });
    }
    /**
    * 初始化弹窗
    */
    var dialoginit = function (selector) {
        $.map(_getMatchElements($(selector), SELECTOR.dialoginit), function (el) {
            E.dialog.init();
            E.Element.toast('div');
        });
    }
    /**
    * 单选
    */
    var _init_radio = function (el) {
        var $el = $(el);
        $el.on('tap', function () {
            $el.attr("data-val", 0).find('i.icon').attr('class', 'icon radio-on');
            $el.siblings().attr("data-val", 1).find('i.icon').attr('class', 'icon radio');
            //自定义change事件
            $el.trigger('change');
        });

    }
    /**
    * 多选
    */
    var _init_checkbox = function (el) {
        var $el = $(el);
        $el.on('tap', function () {
            //alert(1)
            var status = ($el.data('checkbox') == 'unchecked') ? 'checked' : 'unchecked',
                value = ($el.data('checkbox') == 'checked') ? '0' : '1';
            $el.attr("data-val", value).find('i.icon').attr('class', 'icon checkbox-' + status);
            $el.data('checkbox', status);
            //自定义change事件
            $el.trigger('change');
        });

    }
    /**
    * 选中
    */
    var _init_active = function (el) {
        var $el = $(el);
        $el.on('tap', function () {
            $el.addClass("active").siblings().removeClass("active");
        });

    }
    return {
        init: init,
        scroll: initScroll,
        toast: toast,
        dialog: dialoginit
    }
})(E.$);

/**
*  消息组件
*
*/
E.Toast = (function ($) {
    var toast_type = 'toast', _toast, timer,
    //定义模板
        TEMPLATE = {
            toast: '<p>{value}</p>',
            success: '<p><i class="icon checkmark-circle"></i>{value}</p>',
            error: '<p><i class="icon cancel-circle"></i>{value}</p>',
            info: '<p><i class="icon info-2"></i>{value}</p>'
        }

    var init = function () {
        //全局只有一个实例
        $('body').append('<div id=\'E_toast\'></div>');
        _toast = $('#E_toast');
        _subscribeCloseTag();
    }
    /**
    * 关闭消息提示
    */
    var hide = function () {
        E.anim('#E_toast', 'scaleOut', function () {
            $('#E_toast').hide().empty();
        });
    }
    /**
    * 显示消息提示
    * @param type 类型  toast|success|error|info  空格 + class name 可以实现自定义样式
    * @param text 文字内容
    * @param topvalue 顶部距离
    * @param duration 持续时间 为0则不自动关闭,默认为3000ms
    */
    var show = function (type, topvalue, text, duration) {
        if (timer) clearTimeout(timer);
        var classname = type.split(/\s/);
        toast_type = classname[0];
        $('#E_toast').attr('class', type).css("top", topvalue).html(TEMPLATE[toast_type].replace('{value}', text)).show();
        E.anim('#E_toast', 'scaleIn');
        if (duration !== 0) {//为0 不自动关闭
            timer = setTimeout(hide, duration || E.settings.toastDuration);
        }
    }
    var _subscribeCloseTag = function () {
        _toast.on('tap', '[data-target="close"]', function () {
            hide();
        })
    }
    return {
        init: init,
        show: show,
        hide: hide
    }
})(E.$);

/**
* 弹出框组件
*/
E.dialog = (function ($) {
    var _popup, _mask, transition, clickMask2close,
        POSITION = {
            'top': {
                top: 0,
                left: 0,
                right: 0
            },
            'top-second': {
                top: '44px',
                left: 0,
                right: 0
            },
            'center': {
                top: '50%',
                left: '5%',
                right: '5%',
                'border-radius': '3px'
            },
            'bottom': {
                bottom: 0,
                left: 0,
                right: 0
            }
        },
        ANIM = {
            top: ['slideDownIn', 'slideUpOut'],
            bottom: ['slideUpIn', 'slideDownOut'],
            defaultAnim: ['bounceIn', 'bounceOut']
        },
        TEMPLATE = {
            alert: '<div class="popup-title">{title}</div><div class="popup-content">{content}</div><div id="popup_btn_container"><a data-target="closePopup" data-icon="checkmark">{ok}</a></div>',
            confirm: '<div class="popup-title">{title}</div><div class="popup-content">{content}</div><div id="popup_btn_container"><a class="cancel" data-icon="close">{cancel}</a><a data-icon="checkmark">{ok}</a></div>',
            confirm: '<div class="popup-title">{title}</div><div class="popup-content">{content}</div><div id="popup_btn_container"><a class="cancel" data-icon="close">{cancel}</a><a data-icon="checkmark">{ok}</a></div>',
            loading: '<i class="icon spinner">&#xe601;</i><p>{title}</p>'
        };

    /*
    *
    * 全局只有一个popup实例
    * @private
    */
    var init = function () {
        $('body').append('<div id=\"e_popup\" data-toast=\"true\"></div><div id=\"e_popup_mask\" class=\"e_popup_mask\"></div>');
        _mask = $('#e_popup_mask');
        _popup = $('#e_popup');
        _subscribeEvents();
    }
    var show = function (options) {
        var settings = {
            height: undefined, //高度
            width: undefined, //宽度
            opacity: 0.5, //透明度
            url: null, //远程加载url
            tplId: null, //加载模板ID
            BtnOneId: null,
            BtnTwoId: null,
            BtnOneFun: null,
            BtnTwoFun: null,
            tplData: null, //模板数据，配合tplId使用
            html: '', //popup内容
            pos: 'center', //位置 {@String top|top-second|center|bottom}   {@object  css样式}
            clickMask2Close: true, // 是否点击外层遮罩关闭popup
            showCloseBtn: true, // 是否显示关闭按钮
            arrowDirection: undefined, //popover的箭头指向
            animation: true, //是否显示动画
            timingFunc: 'linear',
            duration: 400, //动画执行时间
            onShow: undefined //@event 在popup内容加载完毕，动画开始前触发
        }
        $.extend(settings, options);
        clickMask2close = settings.clickMask2Close;
        _mask.css('opacity', settings.opacity);
        //rest position and class
        _popup.attr({ 'style': '', 'class': '' });
        settings.width && _popup.width(settings.width);
        settings.height && _popup.height(settings.height);
        var pos_type = $.type(settings.pos);
        if (pos_type == 'object') {//style
            _popup.css(settings.pos);
            transition = ANIM['defaultAnim'];
        } else if (pos_type == 'string') {
            if (POSITION[settings.pos]) { //已经默认的样式
                _popup.css(POSITION[settings.pos])
                var trans_key = settings.pos.indexOf('top') > -1 ? 'top' : (settings.pos.indexOf('bottom') > -1 ? 'bottom' : 'defaultAnim');
                transition = ANIM[trans_key];
            } else {// pos 为 class
                _popup.addClass(settings.pos);
                transition = ANIM['defaultAnim'];
            }
        } else {
            console.error('错误的参数！');
            return;
        }
        _mask.show();
        var html;
        if (settings.html) {
            html = settings.html;
        } else if (settings.tplId) {//加载模板
            html = template(settings.tplId, settings.tplData)
        }

        //是否显示关闭按钮
        if (settings.showCloseBtn) {
            html += '<div id="tag_close_popup" data-target="closePopup" class="cancel-circle"></div>';
        }
        //popover 箭头方向
        if (settings.arrowDirection) {
            if (settings.arrowDirection == 'top' || settings.arrowDirection == 'bottom') {
                transition = ANIM[settings.arrowDirection];
            }
        }

        _popup.html(html).show();
        E.Element.init(_popup);
        //执行onShow事件，可以动态添加内容
        settings.onShow && settings.onShow.call(_popup);


        //显示获取容器高度，调整至垂直居中
        if (settings.pos == 'center') {
            var height = _popup.height();
            _popup.css('margin-top', '-' + height / 2 + 'px')
        }
        if (settings.animation) {
            E.anim(_popup, transition[0], settings.duration, settings.timingFunc);
        }
        $(document.body).bind('touchmove', function (e) { e.preventDefault(); }, false); //禁止浏览器滚动
        $(settings.BtnOneId).tap(function () {
            settings.BtnOneFun && settings.BtnOneFun.call(this);
        })
        $(settings.BtnTwoId).tap(function () {
            settings.BtnTwoFun && settings.BtnTwoFun.call($(settings.BtnTwoId));
        })
        E.hasPopupOpen = true;
    }

    /**
    * 关闭弹出框
    * @param noTransition 立即关闭，无动画
    */
    var hide = function (noTransition) {
        setTimeout(function () { _mask.hide() }, 300);
        if (transition && !noTransition) {
            E.anim(_popup, transition[1], 300, function () {
                _popup.hide().empty();
                $(document.body).unbind();  //消除事件
                E.hasPopupOpen = false;
            });
        } else {
            _popup.hide().empty();
            E.hasPopupOpen = false;
        }

    }
    var _subscribeEvents = function () {
        _mask.on('click', function (e) {
            setTimeout(function () { // 防止弹窗跳转
                hide();
            }, 1);
        });
        _popup.on('tap', '[data-target="closePopup"]', function () { hide(); });
    }
    /**
    * alert组件
    * @param title 标题
    * @param content 内容
    */
    var alert = function (content, okCall, title, btnName) {
        var markup = TEMPLATE.alert.replace('{title}', title || '提示').replace('{content}', content).replace('{ok}', btnName || '确定');
        show({
            html: markup,
            pos: 'center',
            clickMask2Close: false,
            showCloseBtn: false
        });
        $('#popup_btn_container [data-icon="checkmark"]').tap(function () {
            if (okCall) hide(), okCall.call(this);
        });
    }

    /**
    * confirm 组件
    * @param title 标题
    * @param content 内容
    * @param okCall 确定按钮handler
    * @param cancelCall 取消按钮handler
    */
    var confirm = function (title, content, okCall, cancelCall) {
        var markup = TEMPLATE.confirm.replace('{title}', title).replace('{content}', content).replace('{cancel}', '取消').replace('{ok}', '确定');
        show({
            html: markup,
            pos: 'center',
            clickMask2Close: false,
            showCloseBtn: false
        });
        $('#popup_btn_container [data-icon="checkmark"]').tap(function () {
            if (okCall) hide(), okCall.call(this);
        });
        $('#popup_btn_container [data-icon="close"]').tap(function () {
            if (cancelCall) hide(), cancelCall.call(this);
        });
    }

    var confirmCustom = function (tplIdt, okCall, cancelCall) {
        show({
            tplId: tplIdt,
            pos: 'center',
            clickMask2Close: false,
            showCloseBtn: false
        });
        $('#checkmark').tap(function () {
            if (okCall) okCall.call(this);
        });
        $('#close').tap(function () {
            if (cancelCall) cancelCall.call(this);
        });
    }
    /**
    * loading组件
    * @param text 文本，默认为“加载中...”
    */
    var loading = function (text) {
        var markup = TEMPLATE.loading.replace('{title}', text || '加载中');
        show({
            html: markup,
            pos: 'loading',
            opacity: .1,
            animation: true,
            clickMask2Close: false
        });
    }
    return {
        init: init,
        show: show,
        close: hide,
        alert: alert,
        confirmCustom: confirmCustom,
        confirm: confirm,
        loading: loading
    }
})(E.$);


/**
*  导航滑动组件(navigator)
*/
; (function ($) {
    E.navigator = function (j) {
        var j = j || {};
        var opt = {
            navli: j.navli || $("#navigator li"),
            uiscroller: j.uiscroller || $(".navigator-list"),
            nav: j.nav || $("#navigator"),
            visibleCount: j.visibleCount || 4,
            cur: j.cur || $("#navOn")
        },
           counts = typeof opt.visibleCount === 'number' ? {
               portrait: opt.visibleCount,
               landscape: Math.floor(opt.visibleCount * 3 / 2)
           } : opts.visibleCount;
        var myscroll, prevIndex;
        var ort = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',
                count = counts[ort];
        var liw = opt.nav.width() / count, iliW = opt.nav.width() / count * opt.navli.length;
        opt.navli.width(liw);
        opt.cur.css({ "width": liw, "left": 0, "position": "absolute", "bottom": 0, "height": 2, "background": "#ff8a00" });
        opt.uiscroller.css("width", iliW);
        $("#navigator").iScroll({ hScroll: true, hScrollbar: false, vScroll: false });
        opt.navli.on("tap", function (e, to) {
            if (prevIndex === undefined) {
                prevIndex = $(this).index() ? 0 : 1;
            }
            to = $(this).index();
            var dir = to > prevIndex,
	                target = $(this)[dir ? 'next' : 'prev'](),
	                offset = target.offset() || $(this).offset(),
                    offsetW = $(this).width(),
                    winw = opt.nav.width(),
                    winwOffset = opt.nav.offset(),
                    left = $(this).offset().left;
            E.anim(opt.cur, { "left": liw * to }, 200);
            if (dir ? offset.left + offsetW > winwOffset.left + winw : offset.left < winwOffset.left) {
                var listOffset = opt.uiscroller.offset();
                opt.nav.iScroll('scrollTo', dir ? winw - offset.left + listOffset.left - offsetW :
		               	listOffset.left - offset.left, 0, 400);
            }
            prevIndex = to;
        })

    }
})(E.$);

/**
* 高亮组件
* data-selected="selected" 值为高亮的样式
*/
E.Selected = (function ($) {
    var SELECTOR = '[data-selected]', activeEl, classname;
    var init = function () {
        $(document).on('touchstart.selected', SELECTOR, function () {
            classname = $(this).data('selected');
            activeEl = $(this).addClass(classname);

        });
        $(document).on('touchmove.selected touchend.selected touchcancel.selected', function () {
            if (activeEl) {
                activeEl.removeClass(classname);
                activeEl = null;
            }
        });
    }
    return {
        init: init
    }
})(E.$);

(function ($) {
    /*
    * 
    * 简化一些常用方法的写法
    ** /
    /**
    * 完善zepto的动画函数,让参数变为可选
    */
    E.anim = function (el, animName, duration, ease, callback) {
        var d, e, c;
        var len = arguments.length;
        for (var i = 2; i < len; i++) {
            var a = arguments[i];
            var t = $.type(a);
            t == 'number' ? (d = a) : (t == 'string' ? (e = a) : (t == 'function') ? (c = a) : null);
        }
        $(el).animate(animName, d || E.settings.transitionTime, e || E.settings.transitionTimingFunc, c);
    }
    /**
    *  显示消息
    * @param text
    * @param type toast|success|error|info
    * @param duration 持续时间，为0则不自动关闭
    */
    E.showToast = function (text, topvalue, type, duration) {
        type = type || 'toast';
        topvalue = topvalue || '70%';
        //topvalue = ($(window).scrollTop() + $(window).height() / 2);
        E.Toast.show(type, topvalue, text, duration);
    }
    E.toggleMenu = function () {
        //阻止data-target != 'link'的a元素的默认行为
        $(document).on('click', 'a[data-target=\'menu\']', function (e) {
            e.preventDefault();
            var hash = $(this).attr('href');
            E.hasMenuOpen ? E.Menu.hide() : E.Menu.show(hash);
        });
    }

    E.preventDefault = function () {
        $(document).on('tap', 'a[data-target=\'preventDefault\']', function (e) {
            e.preventDefault();
        });
    }
    /**
    * 关闭消息提示
    */
    E.hideToast = function () {
        E.Toast.hide();
    }
    E.alert = function (title, content, okCall) {
        E.dialog.alert(title, content, okCall);
    }
    E.confirm = function (title, content, okCall, cancelCall) {
        E.dialog.confirm(title, content, okCall, cancelCall);
    }
    E.confirmCustom = function (tplIdt, okCall, cancelCall) {
        E.dialog.confirmCustom(tplIdt, okCall, cancelCall);
    }
    /**
    * 弹出窗口
    * @param options
    */
    E.popup = function (options) {
        E.dialog.show(options);
    }
    /**
    * 关闭窗口
    */
    E.closePopup = function () {
        E.dialog.close();
    }
    /**
    *导航子菜单
    */
    E.subTypemore = function () {
        var bool = true;
        $(document).on('tap', 'a[data-target=\'more\']', function (e) {
            e.preventDefault();
            if (bool) {
                $(this).children().addClass("dropBtnDroped");
                $(this).siblings().removeClass("hide").addClass("show");
                bool = false;
            } else {
                bool = true;
                $(this).children().removeClass("dropBtnDroped");
                $(this).siblings().removeClass("show").addClass("hide");
            }
        });
    }
    /**
    *点击展开
    */
    E.openShowsub = function () {
        var navConter = $("#navconTent");
        var bkBox = navConter.children(".bk-b");
        bkBox.each(function () {
            var bool = true,
                _thisFindBox = $(this).find(".bkSubbox"),
                _thisFindA = $(this).find(".dropBtn"),
                _thisFindBoxsub = _thisFindBox.find(".bk-sub"),
                _thisFindBoxsublength = _thisFindBoxsub.length,
                _thisFindBoxsubheight = _thisFindBoxsub.height() + 3;
            _thisFindA.attr("data-height", _thisFindBoxsubheight * _thisFindBoxsublength);
            _thisFindA.on('tap', function (e) {
                e.preventDefault();
                var subBox = $(this).parent().siblings();
                subBoxh = parseInt($(this).attr("data-height"));
                var h = $(window).height(),
                           fth = $(".ftNav").height(),
                           navh = $("#navigator").height(),
                           nTop = $("#nTop").height(),
                           articleH = h - 50 - navh - nTop - fth;
                $("#articleScroll").css({ "height": articleH })
                if (bool) {
                    $(this).addClass("dropBtnDroped");
                    E.anim(subBox, { "height": subBoxh }, 300);
                    bool = false;
                } else {
                    bool = true;
                    E.anim(subBox, { "height": 1 }, 300);
                    $(this).removeClass("dropBtnDroped");

                }
            });

        })
    }

})(E.$);