import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import { FaBasketballBall, FaBook, FaRobot, FaJava, FaGithub, FaTwitter, FaWeixin } from 'react-icons/fa'
import { SiSpring, SiNextdotjs, SiMongodb } from 'react-icons/si'
import { GiPokerHand } from 'react-icons/gi'
import { HiMail } from 'react-icons/hi'
import { BsRobot, BsGear } from 'react-icons/bs'
import { Container } from '@/components/common/Container'

const meta = {
    title: '关于我 - Hoho, you found me!',
    description: '沪漂回石家庄，国企工作的臭写代码的。曾是魂游戏珍惜爱好者，因最后生还者二电子阳痿，现 Dota2 云玩家喜欢听点摇滚，喜欢万青、海鹏森、声音玩具。对了还喜欢黄小波~',
    url: `${WEBSITE_HOST_URL}/about`,
}

export const metadata: Metadata = {
    metadataBase: new URL(WEBSITE_HOST_URL),
    title: meta.title,
    description: meta.description,
    openGraph: {
        title: meta.title,
        description: meta.description,
        url: meta.url,
        type: 'website',
    },
    twitter: {
        title: meta.title,
        description: meta.description,
        card: 'summary_large_image',
    },
    alternates: {
        canonical: meta.url,
    },
}

const skills = [
    { icon: FaJava, name: 'Java', color: 'text-red-500' },
    { icon: SiSpring, name: 'Spring', color: 'text-green-500' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-600' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'text-gray-800 dark:text-gray-200' },
    { icon: BsRobot, name: 'RAG', color: 'text-purple-500' },
    { icon: BsGear, name: 'Workflow', color: 'text-blue-500' },
    { icon: FaRobot, name: 'Agent', color: 'text-emerald-500' },
]

const interests = [
    {
        icon: FaBasketballBall,
        title: '篮球',
        description: '热爱篮球运动，享受团队协作的乐趣'
    },
    {
        icon: GiPokerHand,
        title: '德州扑克',
        description: '享受策略思考和决策的乐趣'
    },
    {
        icon: FaBook,
        title: '阅读',
        description: '保持学习的习惯，探索不同领域的知识'
    },
    {
        icon: FaRobot,
        title: 'AI 产品',
        description: '关注并评测最新的 AI 产品和技术'
    },
]

const contacts = [
    {
        icon: FaWeixin,
        name: '微信',
        value: 'xingxing174556571',
        color: 'text-green-500',
    },
    {
        icon: FaGithub,
        name: 'GitHub',
        value: 'ginobefun',
        link: 'https://github.com/ginobefun',
        color: 'text-gray-800 dark:text-gray-200',
    },
    {
        icon: FaTwitter,
        name: 'Twitter',
        value: '@hongming731',
        link: 'https://twitter.com/hongming731',
        color: 'text-blue-400',
    },
    {
        icon: HiMail,
        name: '邮件',
        value: 'hi@gino.bot',
        link: 'mailto:hi@gino.bot',
        color: 'text-red-500',
    },
]

export default function About() {
    return (
        <Container size="md">
            <div className="py-12 sm:py-16 lg:py-20">
                {/* 头部介绍 */}
                <div>
                    <h1 className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                        Hoho, you found me! 
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                        我是椰子，沪漂回石家庄，目前在国企臭写代码的。曾是魂游戏珍惜爱好者，因最后生还者二电子阳痿，现 Dota2 云玩家。喜欢听点摇滚，喜欢万青、海鹏森、声音玩具。对了还喜欢读点王小波~
                    </p>
                </div>

                {/* 技术栈 */}
                {/* <div className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">技术栈</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        我专注于构建高性能、高并发、高稳定性的系统。同时具备全栈开发能力，能够独立完成项目开发。
                    </p>
                    <div className="mt-8 flex flex-wrap gap-6">
                        {skills.map((skill) => (
                            <div key={skill.name} className="flex items-center gap-2">
                                <skill.icon className={`h-6 w-6 ${skill.color}`} />
                                <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* 兴趣爱好 */}
                {/* <div className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">兴趣爱好</h2>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        {interests.map((interest) => (
                            <div
                                key={interest.title}
                                className="group rounded-2xl bg-white/50 p-6 shadow-md transition-all hover:shadow-xl dark:bg-gray-800/50"
                            >
                                <interest.icon className="h-8 w-8 text-blue-500" />
                                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    {interest.title}
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">
                                    {interest.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* 博客目的 */}
                {/* <div className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">关于博客</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        这里是我的数字花园，记录日常学习和思考的内容。你可以找到关于编程技术、人工智能、产品设计的文章，
                        也可以看到我的阅读笔记和生活随想。希望这些内容能够帮助到你，也欢迎与我交流讨论。
                    </p>
                </div> */}

                {/* 联系方式 */}
                {/* <div className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">联系方式</h2>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        {contacts.map((contact) => (
                            <div key={contact.name} className="flex items-center gap-4">
                                <contact.icon className={`h-6 w-6 ${contact.color}`} />
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{contact.name}</span>
                                    {contact.link ? (
                                        <a
                                            href={contact.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                                        >
                                            {contact.value}
                                        </a>
                                    ) : (
                                        <span className="text-gray-900 dark:text-gray-100">{contact.value}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* 订阅提示 */}
                <div className="mt-16">
                    <div className="rounded-2xl bg-blue-50 p-6 dark:bg-blue-900/20">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                            📬 欢迎订阅我的播客
                        </h3>
                        <p className="mt-2 text-blue-800 dark:text-blue-200">
                            字节篝火 分享 Hacker News ，GitHub Trending 每日热点.bot
                        </p>
                        <a
                            href="HTTPS://BYTEBONFIRE.PODCAST.XYZ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                        >
                            立即订阅
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    )
}
