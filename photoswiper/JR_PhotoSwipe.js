/**
 *
 * JR_Validform version 0.0.1
 * 2018/11/12
 */

;(function ($, window, document, undefined) {
    var Container = ['<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">',
        '    <div class="pswp__bg"></div>',
        '    <div class="pswp__scroll-wrap">',
        '        <!-- Container that holds slides. ',
        '            PhotoSwipe keeps only 3 of them in the DOM to save memory.',
        '            Don\'t modify these 3 pswp__item elements, data is added later on. -->',
        '        <div class="pswp__container">',
        '            <div class="pswp__item"></div>',
        '            <div class="pswp__item"></div>',
        '            <div class="pswp__item"></div>',
        '        </div>',
        '        <div class="pswp__ui pswp__ui--hidden">',
        '            <div class="pswp__top-bar">',
        '                <div class="pswp__counter"></div>',
        '                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>',
        '                <button class="pswp__button pswp__button--share" title="Share"></button>',
        '                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>',
        '                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>',
        '                <div class="pswp__preloader">',
        '                    <div class="pswp__preloader__icn">',
        '                      <div class="pswp__preloader__cut">',
        '                        <div class="pswp__preloader__donut"></div>',
        '                      </div>',
        '                    </div>',
        '                </div>',
        '            </div>',
        '            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">',
        '                <div class="pswp__share-tooltip"></div> ',
        '            </div>',
        '            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">',
        '            </button>',
        '            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">',
        '            </button>',
        '            <div class="pswp__caption">',
        '                <div class="pswp__caption__center"></div>',
        '            </div>',
        '        </div>',
        '    </div>',
        '</div>'];

    $('body').append(Container.join(''));

    var $Container = $(".pswp")[0];
    console.log($Container);

    var JRPhotoSwipe = function (PhotoSwipeUI_Default, items, options) {
        // 参数合并
        this.options = this.extend({
            // 这个参数以后可能会更改所以暴露出去

        }, options);

        //原始Validform插件对象
        var originalPhotoSwipe = new PhotoSwipe($Container, PhotoSwipeUI_Default, items, options);

        //属性和方法合并
        this.extend(this, originalPhotoSwipe);
    };

    window.JRPhotoSwipe = JRPhotoSwipe;
}(jQuery, window, document));
