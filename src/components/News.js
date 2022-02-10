import React,{useEffect,useState} from "react";

import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News= (props )=> {
const [articles,setArticles]=useState([]);
const [loading,setLoading]=useState(true);
const [page,setPage]=useState(1);
const [totalresults,setTotalResults]=useState(0);
// console.log("hello mmm");
  // constructor() {
  //   super();
  //   // console.log("Hello I am the constructor from newscomponent");
  //   this.state = {
  //     articles: [],
  //     loading: true,
  //     page: 1,
  //     totalresults: 0,
  //   };
  // }
  // async componentDidMount() {
    // this.setState({ loading: true });
    // // console.log("cdm");
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=18e492571e924286b3fbfeaf180b382a&page=1&pageSize=${props.pageSize}`;
    // let data = await fetch(url);
    // let parseddata = await data.json();
    // // console.log(parseddata);
    // this.setState({
    //   articles: parseddata.articles,
    //   totalresults: parseddata.totalResults,
    //   loading: false,
    // });
  //   this.updatenews();
  // }
  //render ke bad run hoga
  // handleNextClick = async () => {
  //   //  console.log(this.state.totalresults/20,"total page");
  //   //  console.log(this.state.page,"page");
  //   if (
  //     this.state.page + 1 >
  //     Math.ceil(this.state.totalresults / props.pageSize)
  //   ) {
  //     console.log("Iclicked form ");
  //   } else {
  //     this.setState({ loading: true });
  //     let url = `https://newsapi.org/v2/top-headlines?country=${
  //       props.country
  //     }&category=${
  //       props.category
  //     }&apikey=18e492571e924286b3fbfeaf180b382a&page=${
  //       this.state.page + 1
  //     }&pageSize=${props.pageSize}`;
  //     let data = await fetch(url);
  //     let parseddata = await data.json();
  //     // console.log(parseddata);
  //     // this.setState({articles:parseddata.articles})

  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parseddata.articles,
  //       loading: false,
  //     });
  //   }
  // };
  // handlePreviousClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     props.country
  //   }&category=${
  //     props.category
  //   }&apikey=18e492571e924286b3fbfeaf180b382a&page=${
  //     this.state.page - 1
  //   }&pageSize=${props.pageSize}`;
  //   let data = await fetch(url);
  //   let parseddata = await data.json();
  //   this.setState({ loading: true });
  //   // console.log(parseddata);
  //   // this.setState({articles:parseddata.articles})

  //   this.setState({
  //     page: this.state.page + 1,
  //     articles: parseddata.articles,
  //     loading: false,
  //   });
  // };

  const updatenews=async ()=> {
    props.setprogress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setprogress(40);
    // console.log(data);
    let parseddata = await data.json();
    props.setprogress(90);
    console.log(parseddata);
 
    // this.setState({ loading: true });
    // console.log(parseddata);
    // this.setState({articles:parseddata.articles})
    setArticles(articles.concat(parseddata.articles));
    setTotalResults(parseddata.totalresults);
    setLoading(false);
    // this.setState({
    //   articles: this.state.articles.concat(parseddata.articles),
    //   loading: false,
    //   totalresults: parseddata.totalResults,
    // });
    console.log(articles.length);
    props.setprogress(100);
  }

  const fetchMoreData =async () => {
    setPage(page+1);
    // this.setState({ page: this.state.page + 1 });
    // props.setprogress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    // props.setprogress(40);
    // console.log(data);
    let parseddata = await data.json();
    // props.setprogress(90);
    console.log(parseddata);
 
    // this.setState({ loading: true });
    // console.log(parseddata);
    // this.setState({articles:parseddata.articles})
    setArticles(articles.concat(parseddata.articles));
    setTotalResults(parseddata.totalresults);
    setLoading(false);
    // this.setState({
    //   articles: this.state.articles.concat(parseddata.articles),
    //   loading: false,
    //   totalresults: parseddata.totalResults,
    // });
    console.log(articles.length);
    // props.setprogress(100);
  };

useEffect(() => {
    document.title=`${props.category }-NewsMonkey`
    updatenews();
  }, [])

  
    // console.log("render");
    return (
      <>

        <h1 className=" text-center">NewsMonkey - Top Headline</h1>
         <h1 className=" text-center">NewsMonkey - Top Headline</h1>
         {loading && <Spinner></Spinner> } 
        {/* {this.state.articles.map((element) => {
          console.log(element);
        })} */}
        {/* <div className="container"> */}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalresults}
            loader={<Spinner></Spinner>}
          >
            <div className="container">
              <div className="row">
                {articles.map((element) => {
                  return <div key={element.url} className="col-md-3">
                      <NewsItems
                        newsUrl={element.url}
                        imageUrl={element.urlToImage}
                        title={element.title}
                        author={element.author}
                        date={element.publishedAt}
                        description={element.description}
                        source={element.source.name}
                      ></NewsItems>
                    </div>
                  
                })}
              </div>
            </div>
          </InfiniteScroll>
        {/* </div> */}
      </>
    );
  
}

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};
export default News;
