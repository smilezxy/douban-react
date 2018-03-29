import  React from "react"
import styles from "../../css/movieItem.scss"
//评分控件
import { Rate } from 'antd';
export default  class MovieItem extends React.Component{
     constructor(props) {
       super(props);
       this.state = {};
     }
     render () {
         return <div className={styles.box} onClick={this.goDetail}>
             {/*将img3.doubanio.com替换成img1.doubanio.com  是豆瓣API将地址变更  这样替换保证正常显示*/}
             <img src={this.props.images.small.replace('img3.doubanio.com', 'img1.doubanio.com')} className={styles.img} />
             <h4>电影名称：{this.props.title}</h4>
             <h4>上映年份：{this.props.year}年</h4>
             <h4>电影类型：{this.props.genres.join('，')}</h4>
             <Rate disabled defaultValue={this.props.rating.average / 2} />
         </div>
     }
    goDetail = () => {
        this.props.history.push('/movie/detail/' + this.props.id)
    }
}