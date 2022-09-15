export default class Config {

	static BREAKPOINT = 800;

	static DARKER = '#629080';
	static DARK = '#629080';
	static TEXT = '#dddddd';
	static GREY = '#629080';
	static LINE = '#525252';

	static HEADING_SIZE = '46px';
	static HEADING_SIZE_MOBILE = '32px';
	static BODY_SIZE = '22px';
	static GRID_GAP = '18px';
	static GRID_GAP_MOBILE = '10px';

	static FONT_NORMAL = 'TradeGothicNextLTW01-BdCn';
	static FONT_BOLD = 'TradeGothicNextLTW01-BdCn';

	static isMobile = () => {
		return !!(window.innerWidth < this.BREAKPOINT);
	}

}