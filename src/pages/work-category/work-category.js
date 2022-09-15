import React, { useState, useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components'; 
import Config from '../../styles/config';
// import { withRouter } from 'react-router';
import { useParams } from 'react-router-dom';
import { BodyWrapper, Header, HeaderItem } from '../../components/common/common';
import GridItem from '../../components/grid-item/grid-item';
import Grid from '../../components/grid/grid';
// import Data from '../../data/data';
import BackArrow from '../../components/backarrow/BackArrow';
import AnimatedLink from '../../components/animated-link/AnimatedLink';
// import useData from '../../data/useData';

const demo =[
    {
        "title": "OMGB! E12",
        "slug": "omgb-e12-client-influencer",
        "client": {
            "title": "DFS",
            "slug": "dfs",
            "columns": "1",
            "rows": "1",
            "columns_mobile": "1",
            "rows_mobile": "1"
        },
        "description": "",
        "heading": "",
        "pageHeader": "OMGB! E12",
        "work": {
            "title": "Influencer",
            "slug": [
                "influencer"
            ],
            "columns": "1",
            "rows": "1",
            "columns_mobile": "1",
            "rows_mobile": "1"
        },
        "columns": null,
        "rows": null,
        "columns_mobile": null,
        "rows_mobile": null,
        "thumb": null,
        "thumbHover": null,
        "thumbVideo": {
            "ID": 2680,
            "id": 2680,
            "title": "DFS CLIP 12",
            "filename": "DFS-CLIP-12.mp4",
            "filesize": 3049282,
            "url": "http:\/\/elasticbeanstalk-eu-west-2-096748285446.s3.eu-west-2.amazonaws.com\/wp-content\/uploads\/2022\/02\/08180145\/DFS-CLIP-12.mp4",
            "link": "http:\/\/jointlondon.com\/project\/omgb-e12\/dfs-clip-12\/",
            "alt": "",
            "author": "3",
            "description": "",
            "caption": "",
            "name": "dfs-clip-12",
            "status": "inherit",
            "uploaded_to": 2679,
            "date": "2022-02-08 18:01:44",
            "modified": "2022-02-08 18:02:07",
            "menu_order": 0,
            "mime_type": "video\/mp4",
            "type": "video",
            "subtype": "mp4",
            "icon": "http:\/\/jointlondon.com\/wp-includes\/images\/media\/video.png",
            "width": 1920,
            "height": 1080
        },
        "thumbVideoWebM": false,
        "videoembed": "<div style=\"padding:75% 0 0 0;position:relative;\"><iframe src=\"https:\/\/player.vimeo.com\/video\/674951679?h=b5d00df23c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"OMGB! E12\"><\/iframe><\/div><script src=\"https:\/\/player.vimeo.com\/api\/player.js\"><\/script>",
        "video": false,
        "image_link": "",
        "images": [],
        "galleryWidth": 0,
        "galleryHeight": 0,
        "hide_from_clients_page": true,
        "hide_from_work_page": false,
        "disable_click": false
    },
    {
        "title": "OMGB! E12",
        "slug": "omgb-e12-client-influencer",
        "client": {
            "title": "DFS",
            "slug": "dfs",
            "columns": "1",
            "rows": "1",
            "columns_mobile": "1",
            "rows_mobile": "1"
        },
        "description": "",
        "heading": "",
        "pageHeader": "OMGB! E12",
        "work": {
            "title": "Influencer",
            "slug": [
                "influencer"
            ],
            "columns": "1",
            "rows": "1",
            "columns_mobile": "1",
            "rows_mobile": "1"
        },
        "columns": null,
        "rows": null,
        "columns_mobile": null,
        "rows_mobile": null,
        "thumb": null,
        "thumbHover": null,
        "thumbVideo": {
            "ID": 2680,
            "id": 2680,
            "title": "DFS CLIP 12",
            "filename": "DFS-CLIP-12.mp4",
            "filesize": 3049282,
            "url": "http:\/\/elasticbeanstalk-eu-west-2-096748285446.s3.eu-west-2.amazonaws.com\/wp-content\/uploads\/2022\/02\/08180145\/DFS-CLIP-12.mp4",
            "link": "http:\/\/jointlondon.com\/project\/omgb-e12\/dfs-clip-12\/",
            "alt": "",
            "author": "3",
            "description": "",
            "caption": "",
            "name": "dfs-clip-12",
            "status": "inherit",
            "uploaded_to": 2679,
            "date": "2022-02-08 18:01:44",
            "modified": "2022-02-08 18:02:07",
            "menu_order": 0,
            "mime_type": "video\/mp4",
            "type": "video",
            "subtype": "mp4",
            "icon": "http:\/\/jointlondon.com\/wp-includes\/images\/media\/video.png",
            "width": 1920,
            "height": 1080
        },
        "thumbVideoWebM": false,
        "videoembed": "<div style=\"padding:75% 0 0 0;position:relative;\"><iframe src=\"https:\/\/player.vimeo.com\/video\/674951679?h=b5d00df23c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"OMGB! E12\"><\/iframe><\/div><script src=\"https:\/\/player.vimeo.com\/api\/player.js\"><\/script>",
        "video": false,
        "image_link": "",
        "images": [],
        "galleryWidth": 0,
        "galleryHeight": 0,
        "hide_from_clients_page": true,
        "hide_from_work_page": false,
        "disable_click": false
    },
]
const work= [
    {
        "title": "Social",
        "slug": "social",
        "columns": "1",
        "columns_mobile": null,
        "fixed_titles": "0",
        "disable_click": "0",
        "rows": "1",
        "rows_mobile": null,
        "image": null
    },
    {
        "title": "Social",
        "slug": "social",
        "columns": "1",
        "columns_mobile": 2,
        "fixed_titles": "0",
        "disable_click": "0",
        "rows": "1",
        "rows_mobile": null,
        "image": null
    },
    {
        "title": "Social",
        "slug": "social",
        "columns": "2",
        "columns_mobile": null,
        "fixed_titles": "0",
        "disable_click": "0",
        "rows": "1",
        "rows_mobile": null,
        "image": null
    },
    {
        "title": "Social",
        "slug": "social",
        "columns": "2",
        "columns_mobile": null,
        "fixed_titles": "0",
        "disable_click": "0",
        "rows": "1",
        "rows_mobile": null,
        "image": null
    },
    {
        "title": "Social",
        "slug": "social",
        "columns": "1",
        "columns_mobile": 2,
        "fixed_titles": "0",
        "disable_click": "0",
        "rows": "1",
        "rows_mobile": null,
        "image": null
    },
    {
        "title": "Social",
        "slug": "social",
        "columns": "1",
        "columns_mobile": 2,
        "fixed_titles": "0",
        "disable_click": "0",
        "rows": "1",
        "rows_mobile": null,
        "image": null
    },
    {
        "title": "Social",
        "slug": "social",
        "columns": "2",
        "columns_mobile": null,
        "fixed_titles": "0",
        "disable_click": "0",
        "rows": "2",
        "rows_mobile": null,
        "image": null
    },
    {
        "title": "Social",
        "slug": "social",
        "columns": "1",
        "columns_mobile": null,
        "fixed_titles": "0",
        "disable_click": "0",
        "rows": "1",
        "rows_mobile": null,
        "image": null
    },
    {
        "title": "Social",
        "slug": "social",
        "columns": "1",
        "columns_mobile": null,
        "fixed_titles": "0",
        "disable_click": "0",
        "rows": "1",
        "rows_mobile": null,
        "image": null
    },
    {
        "title": "Social",
        "slug": "social",
        "columns": "1",
        "columns_mobile": null,
        "fixed_titles": "0",
        "disable_click": "0",
        "rows": "1",
        "rows_mobile": null,
        "image": null
    },
    {
        "title": "Social",
        "slug": "social",
        "columns": "1",
        "columns_mobile": null,
        "fixed_titles": "0",
        "disable_click": "0",
        "rows": "1",
        "rows_mobile": null,
        "image": null
    },
]
const WorkCategory = ({history}) => {
	const { slug } = useParams();
	//console.log(slug);
	//console.log(Data.getData());

	// const {work, projects, loading} = useData();

	const [category, setCategory] = useState();
	const [workProjects, setWorkProjects] = useState();

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 30);
	} , [])
	
	useEffect(() => {
		if(!work || !demo) return;
		// console.log('work :>> ', work);
		// console.log('projects :>> ', projects);
		// const items = Data.getWorkCategory(slug, work, projects);
		// console.log(items);
		// setCategory(items.category);
		// setWorkProjects(items.projects);

	} , [work
        // , projects
        , slug]);
	
	const getClient = (item) => {
		return item && item.client ? item.client.title : '';
	}

	const disableClick = (category, item, title) => {
		if(!item) return true;
		let dc = false;
		if(category.disable_click == true || category.disable_click == 1 || item.disable_click == true || item.disable_click == 1) {
			dc = true;
		}
		
		// console.log(category.disable_click, item.disable_click, dc, '    |    ', title);
		return dc;
	}

	
	return (
		<>
			<Header>
				<AnimatedLink to="/work">WORK</AnimatedLink>
				{category && <HeaderItem lineHeight='1em' uppercase dangerouslySetInnerHTML={{__html: category.title}}></HeaderItem>}
				<BackArrow to="/work" />
			</Header>
			<BodyWrapper>
				<Grid disable_click={category && category.disable_click}>
					{/* {workProjects && workProjects.map((item, index) => {
                    	
						if(item.hide_from_work_page === true){
							return null;
						}

						// const disable_click = category && category.disable_click ? Boolean(category.disable_click || item.disable_click) : false;
						const disable_click = disableClick(category, item, getClient(item));

						return <GridItem
							fixedTitles={category.fixed_titles}
							showHover
							index={index}
							key={`${item.slug}_${index}`}
							link={`/project/${item.slug}`}
							fromTitle={category.title}
							from={`/work/${slug}`}
							title={getClient(item)}
							subtitle={item.title}
							cols={item.work.columns}
							rows={item.work.rows}
							image={item.thumb}
							imageHover={item.thumbHover}
							video={item.thumbVideo}
							disable_click={disable_click}
							/>
					})} */}
				</Grid>
				
			</BodyWrapper>
		</>
	);
};

export default  WorkCategory;