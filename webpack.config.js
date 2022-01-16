//默认情况下，直接使用webpack .\src\main.js .\dist\bundle.js 就能实项目的构建了
//但是，如果只运行 webpack 命令的话，需要在项目的根目录中，创建webpack.config.js的文件；
//而且，在这个配置文件中，必须显示声明要处理文件的路径 和 要输出文件的路径
//注意：这里使用node 中的语法，向外暴露了一个配置对象
//因为webpack这个构建工具，底层就是使用node.js开发出来时的

 const path = require('path')
 //导入把html页面生成到内存中的插件
 const htmlWebpackPlugin = require('html-webpack-plugin')//导入的是一个构造函数
 //导入vue 的插件
 const VueLoaderPlugin = require('vue-loader/lib/plugin')
 module.exports={
    mode:'development',
     entry:path.join(__dirname,'./src/main.js'),
     output:{
         path:path.join(__dirname,'./dist'),
         filename:'bundle.js'
     },
     
     plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname, './src/index.html'),//要把那个html页面作为模板
                                                              //复制一份托管到内存中
    
            filename: 'index.html' //指定，将来在内存中复制出来的页面，名称叫做index.html
        }),
        new VueLoaderPlugin(),//配置vue 的插件
    ],
    
   
    module :{
        rules:[
            //test匹配哪些文件
            {
                test: /\.css$/,
                //使用哪些 loader进行处理
                use: [
                    //use数组中loader执行顺序，从右到左，从下到上
                    //创建style 标签，将js中的样式资源插入进去，添加到head 中生效
                    'style-loader',
                    //将CSS文件变成common.js模块加载到js 中，里面内容是样式字符串
                    'css-loader'
                ]
            },
            //配置处理less文件规则
            //less是less-loader的内置依赖项，不需要显示的配置到loader的规则中
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //配置处理scss文件规则
            //需要下载安装配置sass-loader 和node-sass,其中node-sass是sass-loader的内置依赖项
                              //不需要显示的配置到loader的规则中
                               //这里文件名.scss  loader是sass-loader,不要混了
         {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},

         //webpack5不要再用url-loader了!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
         
         {test:/\.(png|jpg|gif)$/i,
           type:'asset',
           parser:{
               dataUrlCondition:{
                   maxSize:10000

               }
           }
           
        
        },
        //下面添加转换js文件的loader,其中必须把node_modules目录设置为排除项。这样在打包的时候
        //会忽略所有node-modules下面所有的js文件，否则项目运行不起来！！！
        {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},

        {test:/\.vue$/,use:'vue-loader'}//解析vue组件的第三方loader
        
        ]
    }
    
        // devSever:{//webpack-dev-server运行时候的指令
        //--open  --port 3000 --host 127.0.0.1  --hot
        // open:true,//自动打开浏览器
        // port:3000,
        // host:'127.0.0.1',
        //hot:true  //启用热更新，这里的hot指令，需要配合一个热更新的webpack插件才能正常使用
    


 }


/*
//webpack.config.js 是webpack的配置文件
//作用：指示webpack干哪些活（当你运行webpack指令时，会加载里面的配置）
//所有构建工具都是基于nodejs 平台运行的，模块化默认采用common.js 
//resolve 用来拼接绝对路径的方法

const  {resolve} =require('path');
 module.exports={
     //webpack配置
     //入口起点
     entry:'./src/main.js',
     //输出
     output:{
         //输出文件名
         filename:'bundle.js',
         //输出路径
         //__dirname 是node.js的变量，代表当前文件的目录绝对路径
         path:resolve(__dirname,'dist')
     },
     
     //loader的配置,
     module:{//配置非js文件对应的loader
         rules:[//详细配置js 文件和loader之间的对应关系
          //test匹配哪些文件
         { test: /\.css$/,
          //使用哪些 loader进行处理
          use:[
              //use数组中loader执行顺序，从右到左，从下到上
              //创建style 标签，将js中的样式资源插入进去，添加到head 中生效
              'style-loader',
              //将CSS文件变成common.js模块加载到js 中，里面内容是样式字符串
              'css-loader'
          ]
        },
        {
            test:/\.less$/,
            use:[
                'style-loader',
                'css-loader',
                //将less文件编译成css文件
                //需要下载less-loader 和less
                'less-loader'
            ]
        }
         ]
     },
     //plugins的配置
     plugins:[],
     //模式
     mode:'development',
     //mode:'production'
    
    }

 */

