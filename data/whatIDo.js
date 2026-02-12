const whatIDo = {
    title: 'What I do',
    subtitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    categories: [
        {
            id: 'frontend',
            title: 'Front-end',
            icons: [
                { id: 'html5', label: 'HTML5', fa: 'fab fa-html5' },
                { id: 'css3', label: 'CSS3', fa: 'fab fa-css3-alt' },
                { id: 'js', label: 'JavaScript', fa: 'fab fa-js' },
                { id: 'react', label: 'React', src: './images/skills/react.svg' },
                { id: 'jquery', label: 'jQuery', src: './images/skills/jquery.svg' },
                { id: 'sass', label: 'Sass', src: './images/skills/sass.svg' }
            ]
        },
        {
            id: 'backend',
            title: 'Backend & Runtimes',
            icons: [
                { id: 'nodejs', label: 'Node.js', src: './images/skills/nodejs.svg' },
                { id: 'npm', label: 'npm', fa: 'fab fa-npm' },
                { id: 'dotnet', label: '.NET', src: './images/skills/dotnet.svg' },
                { id: 'RESTful APIs', label: 'RESTful APIs', src: './images/skills/REST.svg' },
                { id: 'csharp', label: 'C#', src: './images/skills/csharp.svg' }
            ]
        },
        {
            id: 'databases',
            title: 'Databases',
            icons: [
                { id: 'postgres', label: 'Postgres', src: './images/skills/postgres.svg' },
                { id: 'mysql', label: 'MySQL', src: './images/skills/mysql.svg' },
                { id: 'sql', label: 'SQL', fa: 'fas fa-database' }
            ]
        },
        {
            id: 'containers',
            title: 'Containers',
            icons: [
                { id: 'docker', label: 'Docker', fa: 'fab fa-docker' },
                { id: 'kubernetes', label: 'Kubernetes', src: './images/skills/kubernates.svg' }
            ]
        },
        {
            id: 'cloud',
            title: 'Cloud & Infra',
            icons: [
                { id: 'azure', label: 'Azure', src: './images/skills/azure.svg' },
                { id: 'azure-sql', label: 'Azure SQL', src: './images/skills/azure-sql.svg' },
                { id: 'azure-functions', label: 'Azure Functions', src: './images/skills/azure-functions.svg' },
                { id: 'azure-storage', label: 'Azure Storage', src: './images/skills/azure-storage.svg' },
                { id: 'azure-eventgrid', label: 'Event Grid', src: './images/skills/azure-eventgrid.svg' },
                { id: 'azure-insight', label: 'Application Insights', src: './images/skills/azure-insight.svg' }
            ]
        },
        {
            id: 'api',
            title: 'APIs & Observability',
            icons: [
                { id: 'openapi', label: 'OpenAPI', src: './images/skills/openAPI.svg' },
                { id: 'opentelemetry', label: 'OpenTelemetry', src: './images/skills/opentele.svg' }
            ]
        },
        {
            id: 'tools',
            title: 'Dev Tools',
            icons: [
                { id: 'git', label: 'Git', src: './images/skills/git.svg' },
                { id: 'github', label: 'GitHub', src: './images/skills/github.svg' },
                { id: 'postman', label: 'Postman', src: './images/skills/postman.svg' },
                { id: 'nuget', label: 'NuGet', src: './images/skills/nuget.svg' }
            ]
        }
    ],
    bullets: [
        'Developed an AI - powered customer feedback intelligence module to automatically analyze large volumes of feedback and generate sentiment - based insights.',
        'Built REST - based APIs using ASP.NET Core Web API and C# to enable real - time and batch feedback processing workflows.',
        'Implemented prompt orchestration using Microsoft Semantic Kernel for structured LLM- based sentiment classification and response processing.',
        'Integrated local LLM inference using Phi models (Ollama) to support privacy - friendly experimentation and offline processing.',
        'Designed a cloud - ready architecture enabling seamless migration to Azure OpenAI-based enterprise deployments.',
        'Developed scalable microservice - ready processing components supporting enterprise integration scenarios.',
    ]
    ,
    education: [
        {
            level: 'Post-Graduation',
            degree: 'Master of Computer Applications',
            institution: 'Anna University, Chennai',
            year: '2011 - 2014',
            details: 'Specialized in Distributed Systems and Cloud Computing.'
        },
        {
            level: 'Under-Graduation',
            degree: "Bachelor's of Computer Applications",
            institution: 'Bharathiar University, Coimbatore',
            year: '2008 - 2011',
            details: 'Focused on software engineering and algorithms.'
        }
    ]
}

export default whatIDo
