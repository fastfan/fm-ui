// This file is auto gererated by build/bin/build-entry.js
import Alert from './alert/index.js';
import Aside from './aside/index.js';
import Autocomplete from './autocomplete/index.js';
import Avatar from './avatar/index.js';
import Backtop from './backtop/index.js';
import Badge from './badge/index.js';
import Breadcrumb from './breadcrumb/index.js';
import BreadcrumbItem from './breadcrumb-item/index.js';
import Button from './button/index.js';
import ButtonGroup from './button-group/index.js';
import Calendar from './calendar/index.js';
import Card from './card/index.js';
import Carousel from './carousel/index.js';
import CarouselItem from './carousel-item/index.js';
import Cascader from './cascader/index.js';
import CascaderPanel from './cascader-panel/index.js';
import Checkbox from './checkbox/index.js';
import CheckboxButton from './checkbox-button/index.js';
import CheckboxGroup from './checkbox-group/index.js';
import Col from './col/index.js';
import Collapse from './collapse/index.js';
import CollapseItem from './collapse-item/index.js';
import ColorPicker from './color-picker/index.js';
import Container from './container/index.js';
import DatePicker from './date-picker/index.js';
import Dialog from './dialog/index.js';
import Divider from './divider/index.js';
import Drawer from './drawer/index.js';
import Dropdown from './dropdown/index.js';
import DropdownItem from './dropdown-item/index.js';
import DropdownMenu from './dropdown-menu/index.js';
import Empty from './empty/index.js';
import Footer from './footer/index.js';
import Form from './form/index.js';
import FormItem from './form-item/index.js';
import Header from './header/index.js';
import Icon from './icon/index.js';
import Image from './image/index.js';
import InfiniteScroll from './infinite-scroll/index.js';
import Input from './input/index.js';
import InputNumber from './input-number/index.js';
import Link from './link/index.js';
import Loading from './loading/index.js';
import Main from './main/index.js';
import Menu from './menu/index.js';
import MenuItem from './menu-item/index.js';
import MenuItemGroup from './menu-item-group/index.js';
import Message from './message/index.js';
import MessageBox from './message-box/index.js';
import Notification from './notification/index.js';
import Option from './option/index.js';
import OptionGroup from './option-group/index.js';
import PageHeader from './page-header/index.js';
import Pagination from './pagination/index.js';
import Popconfirm from './popconfirm/index.js';
import Popover from './popover/index.js';
import Progress from './progress/index.js';
import Radio from './radio/index.js';
import RadioButton from './radio-button/index.js';
import RadioGroup from './radio-group/index.js';
import Rate from './rate/index.js';
import Row from './row/index.js';
import Scrollbar from './scrollbar/index.js';
import Select from './select/index.js';
import Skeleton from './skeleton/index.js';
import SkeletonItem from './skeleton-item/index.js';
import Slider from './slider/index.js';
import Spinner from './spinner/index.js';
import Step from './step/index.js';
import Steps from './steps/index.js';
import Submenu from './submenu/index.js';
import Switch from './switch/index.js';
import TabPane from './tab-pane/index.js';
import Table from './table/index.js';
import TableColumn from './table-column/index.js';
import Tabs from './tabs/index.js';
import Tag from './tag/index.js';
import TimePicker from './time-picker/index.js';
import TimeSelect from './time-select/index.js';
import Timeline from './timeline/index.js';
import TimelineItem from './timeline-item/index.js';
import Tooltip from './tooltip/index.js';
import Transfer from './transfer/index.js';
import Tree from './tree/index.js';
import Upload from './upload/index.js';
import { PopupManager } from 'element-ui/src/utils/popup/index.js';
import Popup from 'element-ui/src/utils/popup/index.js';
import VuePopper from 'element-ui/src/utils/vue-popper.js';

import locale from './locale/index.js';

const version = '1.3.7';
const components = [
  Alert,
  Aside,
  Autocomplete,
  Avatar,
  Backtop,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Calendar,
  Card,
  Carousel,
  CarouselItem,
  Cascader,
  CascaderPanel,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  ColorPicker,
  Container,
  DatePicker,
  Dialog,
  Divider,
  Drawer,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Empty,
  Footer,
  Form,
  FormItem,
  Header,
  Icon,
  Image,
  InfiniteScroll,
  Input,
  InputNumber,
  Link,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Option,
  OptionGroup,
  PageHeader,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  RadioButton,
  RadioGroup,
  Rate,
  Row,
  Scrollbar,
  Select,
  Skeleton,
  SkeletonItem,
  Slider,
  Spinner,
  Step,
  Steps,
  Submenu,
  Switch,
  TabPane,
  Table,
  TableColumn,
  Tabs,
  Tag,
  TimePicker,
  TimeSelect,
  Timeline,
  TimelineItem,
  Tooltip,
  Transfer,
  Tree,
  Upload
  
];

const install = function(Vue, opts = {}){
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(Component => {
    Vue.use(Component);
  });

  Vue.use(Loading.directive);

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  locale,
  install,
  version,
  Alert,
  Aside,
  Autocomplete,
  Avatar,
  Backtop,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Calendar,
  Card,
  Carousel,
  CarouselItem,
  Cascader,
  CascaderPanel,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  ColorPicker,
  Container,
  DatePicker,
  Dialog,
  Divider,
  Drawer,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Empty,
  Footer,
  Form,
  FormItem,
  Header,
  Icon,
  Image,
  InfiniteScroll,
  Input,
  InputNumber,
  Link,
  Loading,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Message,
  MessageBox,
  Notification,
  Option,
  OptionGroup,
  PageHeader,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  RadioButton,
  RadioGroup,
  Rate,
  Row,
  Scrollbar,
  Select,
  Skeleton,
  SkeletonItem,
  Slider,
  Spinner,
  Step,
  Steps,
  Submenu,
  Switch,
  TabPane,
  Table,
  TableColumn,
  Tabs,
  Tag,
  TimePicker,
  TimeSelect,
  Timeline,
  TimelineItem,
  Tooltip,
  Transfer,
  Tree,
  Upload,
  PopupManager,
  Popup,
  VuePopper
};

export default {
  install,
  version
};
