<script>
import Carousel from 'element-ui/packages/carousel/index.js';
export default {
  name: 'FCarousel',
  mixins: [Carousel],
  methods: {
    updateItems() {
      this.items = this.$children.filter(child => child.$options.name === 'CCarouselItem' || child.$options.name === 'ElCarouselItem');
    },
    setActiveItem(index) {
      if (typeof index === 'string') {
        const filteredItems = this.items.filter(item => item.name === index);
        if (filteredItems.length > 0) {
          index = this.items.indexOf(filteredItems[0]);
        }
      }
      index = Number(index);
      if (isNaN(index) || index !== Math.floor(index)) {
        console.warn('[CUI Warn][Carousel]index must be an integer.');
        return;
      }
      let length = this.items.length;
      const oldIndex = this.activeIndex;
      if (index < 0) {
        this.activeIndex = this.loop ? length - 1 : 0;
      } else if (index >= length) {
        this.activeIndex = this.loop ? 0 : length - 1;
      } else {
        this.activeIndex = index;
      }
      if (oldIndex === this.activeIndex) {
        this.resetItemPosition(oldIndex);
      }
    },
  }
}
</script>
