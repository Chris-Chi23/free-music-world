import jsonp from '../../common/utils/jsonp';
import {commonParams} from "../../common/config/externalData";

export const getRecommend = () => {
        const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
        const data = {
            ...commonParams,
            platform:'h5',
            uin:0,
            needNewCode:1
        };
        return jsonp(url, data, options);
}