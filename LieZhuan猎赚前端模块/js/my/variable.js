/**
 * ajax访问地址
 */
var myUrl = "http://10.10.10.29:8080/";
/**
 * 提示码
 *	Code码	含义	备注
 *	0	操作失败	
 *	1	操作成功	
 *	2	数据库重名	
 *	3	原密码不正确,修改密码时，原密码不正确
 *	4	考号/学号不存在,激活时，考号/学号不存在
 *	5	短信发送成功	
 *	6	短信发送失败	
 *	7	手机验证失败,手机验证码验证失败
 *	8	不是本机登陆,EMEI码判断不是本手机登录
 * 	9	任务不存在	
 *	10	任务不可接	
 *	11	任务申请成功	
 *	12	规定人数已满,用于团队任务
 *	13	 申请记录不存在,审核申请时
 *	14	均已申请，不必重点,规定人数都点击了申请完成，不必重新点击申请完成
 *	15	任务已失败	,用户点击完成时，任务已失败（加急过时效）
 *	16	接受者不存在	
 *	17	账号未激活	
 */
var codes = [
	"操作失败",
	"操作成功",
	"数据库重名",
	"原密码不正确",
	"考号/学号不存在",
	"短信发送成功",
	"短信发送失败",
	"手机验证失败",
	"不是本机登陆",
	"任务不存在",
	"任务不可接",
	"任务申请成功",
	"规定人数已满",
	"申请记录不存在",
	"均已申请",
	"任务已失败",
	"接受者不存在",
	"账号未激活"
];