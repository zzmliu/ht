<template>
    <div class="gg-left">
    <el-menu default-active="0" class="aside_menu"
            background-color="#267cb7" text-color="white" active-text-color="#ffd04b" :unique-opened=true>
      <el-submenu v-for="item in menu" :index="item.title" :key="item.title" >
        <template slot="title">
          <i class="el-icon-location icfont"></i>
          <span>{{item.title}}</span>
        </template>
      <el-menu-item v-for="subItem in item.submenu" :key="subItem.text" :index="subItem.text">
          <router-link :to="subItem.path">
             <i class="el-icon-document icfont"></i>
             <span>{{subItem.text}}</span>
          </router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    </div>
</template>
<script>
   export default {
        data() {
            return {
                closeIndex:"",
                menu: [
                    { title: '学员问题', submenu:
                        [
                            { text: '内容管理', path: '/admin/goods/list' },
                            { text: '类别管理', path: '/#' },
                            { text: '评论管理', path: '/#' },
                        ]
                    },
                    { title: '前端技术', submenu:
                        [
                            { text: '内容管理', path: '/' },
                            { text: '类别管理', path: '/' },
                            { text: '评论管理', path: '/' },
                        ]
                    },
                    { title: '难点答疑', submenu:
                        [
                            { text: '内容管理', path: '/' },
                            { text: '类别管理', path: '/' },
                            { text: '评论管理', path: '/' },
                        ]
                    },
                    { title: '资源下载', submenu:
                        [
                            { text: '内容管理', path: '/' },
                            { text: '类别管理', path: '/' },
                            { text: '评论管理', path: '/' },
                        ]
                    },
                    { title: '商品管理', submenu:
                        [
                            { text: '内容管理', path: '/' },
                            { text: '类别管理', path: '/' },
                            { text: '评论管理', path: '/' },
                        ]
                    },
                    { title: '订单管理', submenu:
                        [
                            { text: '订单列表', path: '/' },
                        ]
                    }
                ],
            }
        },
         methods:{

                }
    }
</script>   

<style scoped lang="less">
.icfont{
            color: white;
        }
.gg-left{
    height: 100%;
    .el-col-12{
        width: 100% ! important;
        
    }
         .el-menu {
            border-right: 0;

            // 去掉导航列表的最小宽度限制
            &-item {
                min-width: 0;
            }
        }
}
</style>