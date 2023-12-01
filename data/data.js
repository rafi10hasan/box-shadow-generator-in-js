const data = [
    {
        id:1,
        title:'material-ui',
        category:'material',
        boxshadow:'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'
    },
    {
        id:2,
        title:'material-ui',
        category:'material',
        boxshadow:' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
    },
    {
        id:3,
        title:'material-ui',
        category:'material',
        boxshadow:' rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'
    },
    {
        id:4,
        title:'material-ui',
        category:'material',
        boxshadow:' rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'
    },
    {
        id:5,
        title:'material-ui',
        category:'material',
        boxshadow:' 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
    },
    {
        id:6,
        title:'material-ui',
        category:'material',
        boxshadow:' rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
    },
    {
        id:7,
        title:'tailwind-css',
        category:'tailwind',
        boxshadow:' rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'
    },
    {
        id:8,
        title:'tailwind-css',
        category:'tailwind',
        boxshadow:' rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'
    },
    {
        id:9,
        title:'tailwind-css',
        category:'tailwind',
        boxshadow:' rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'
    },{
        id:10,
        title:'tailwind-css',
        category:'tailwind',
        boxshadow:' rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
    },
    {
        id:11,
        title:'tailwind-css',
        category:'tailwind',
        boxshadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px'
    },
    {
        id:12,
        title:'tailwind-css',
        category:'tailwind',
        boxshadow:' rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'
    },
    {
        id:13,
        title:'tailwind-css',
        category:'tailwind',
        boxshadow:' 0 1px 2px 0 rgba(0,0,0,0.05)'
    },
    {
        id:14,
        title:'tailwind-css',
        category:'tailwind',
        boxshadow:' 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)'
    },
    {
        id:15,
        title:'tailwind-css',
        category:'tailwind',
        boxshadow:' 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)'
    },
    {
        id:16,
        title:'tailwind-css',
        category:'tailwind',
        boxshadow:' inset 0 2px 4px 0 rgba(0,0,0,0.05)'
    },
    {
        id:17,
        title:'primer',
        category:'primer',
        boxshadow:' 0px 1px 0px 0px rgba(27, 31, 36, 0.04)'
    },
    {
        id:18,
        title:'primer',
        category:'primer',
        boxshadow:' 0px 3px 6px 0px rgba(140, 149, 159, 0.15)'
    },
    {
        id:19,
        title:'primer',
        category:'primer',
        boxshadow:' 0px 8px 24px 0px rgba(140, 149, 159, 0.2)'
    },
    {
        id:20,
        title:'primer',
        category:'primer',
        boxshadow:' 0px 12px 28px 0px rgba(140, 149, 159, 0.3)'
    },
    {
        id:21,
        title:'fluent ui',
        category:'fluent-ui',
        boxshadow:' 0 2px 4px 0 rgba(0, 0, 0, .13), 0 1px 1px 0 rgba(0, 0, 0, .11)'
    },
    {
        id:22,
        title:'fluent ui',
        category:'fluent-ui',
        boxshadow:' 0 3px 7px 0 rgba(0, 0, 0, .13), 0 1px 2px 0 rgba(0, 0, 0, .11)'
    },
    {
        id:23,
        title:'fluent ui',
        category:'fluent-ui',
        boxshadow:' 0 7px 15px 0 rgba(0, 0, 0, .13), 0 1px 4px 0 rgba(0, 0, 0, .11)'
    },
    {
        id:24,
        title:'fluent ui',
        category:'fluent-ui',
        boxshadow:' 0 7px 30px -10px rgba(150,170,180,0.5)'
    },
    {
        id:25,
        title:'fluent ui',
        category:'fluent-ui',
        boxshadow:' 2px 2px 2px rgba(0, 0, 0, 0.15)'
    },
    {
        id:26,
        title:'fluent ui',
        category:'fluent-ui',
        boxshadow:' 0px 2px 4px rgba(0, 0, 0, 0.2)'
    },
    {
        id:27,
        title:'inset',
        category:'inset',
        boxshadow:' rgb(200, 208, 231) 3.2px 3.2px 8px 0px inset, rgb(255, 255, 255) -3.2px -3.2px 8px 0px inset'
    },
    {
        id:28,
        title:'inset',
        category:'inset',
        boxshadow:' rgba(0, 0, 0, 0.1) 0px 10px 15px -3px inset, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px'
    },
    {
        id:29,
        title:'inset',
        category:'inset',
        boxshadow:' rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
    },
    {
        id:30,
        title:'inset',
        category:'inset',
        boxshadow:' rgba(17, 17, 26, 0.1) 0px 4px 16px 0px inset, rgba(17, 17, 26, 0.05) 0px 8px 32px 0px'
    },
   
    {
        id:31,
        title:'inset',
        category:'inset',
        boxshadow:' 0 20px 10px -20px rgba(0,0,0,0.45) inset'
    },
    {
        id:32,
        title:'inset',
        category:'inset',
        boxshadow:' -20px 0 10px -20px rgba(0,0,0,0.45) inset'
    },
    {
        id:33,
        title:'inset',
        category:'inset',
        boxshadow:' 0 -20px 10px -20px rgba(0,0,0,0.45) inset'
    },
    {
        id:34,
        title:'inset',
        category:'inset',
        boxshadow:' 0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)'
    },
    {
        id:35,
        title:'trendy',
        category:'trendy',
        boxshadow:' 0px 3px 5px rgba(0, 0, 0, 0.04)'
    },
    {
        id:36,
        title:'trendy',
        category:'trendy',
        boxshadow:' 0px 3px 8px rgba(0, 0, 0, 0.24)'
    },
    {
        id:37,
        title:'trendy',
        category:'trendy',
        boxshadow:' 0px 9px 20px rgba(13, 38, 76, 0.19)'
    },
    {
        id:38,
        title:'trendy',
        category:'trendy',
        boxshadow:' 0px 4px 8px -2px rgba(9, 30, 66, 0.25), 0px 0px 0px 1px rgba(9, 30, 66, 0.08)'
    },
    {
        id:39,
        title:'trendy',
        category:'trendy',
        boxshadow:' 0px 1px 1px rgba(9, 30, 66, 0.25), 0px 0px 1px 1px rgba(9, 30, 66, 0.13)'
    },
    {
        id:40,
        title:'trendy',
        category:'trendy',
        boxshadow:' 0px 0px 0px 1px rgba(0, 0, 0, 0.05), inset 0px 0px 0px 1px rgba(209, 213, 219,1)'
    },
    {
        id:41,
        title:'trendy',
        category:'trendy',
        boxshadow:' 0px 1px 3px 0px rgba(0, 0, 0, 0.02), 0px 0px 0px 1px rgba(27, 31, 35, 0.15)'
    },
    {
        id:42,
        title:'trendy',
        category:'trendy',
        boxshadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px'
    },
    {
        id:43,
        title:'trendy',
        category:'trendy',
        boxshadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
    },
    {
        id:44,
        title:'trendy',
        category:'trendy',
        boxshadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px'
    },
    {
        id:45,
        title:'trendy',
        category:'trendy',
        boxshadow:' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    },
    {
        id:46,
        title:'trendy',
        category:'trendy',
        boxshadow:' rgba(0, 0, 0, 0.16) 0px 1px 4px'
    },
    {
        id:47,
        title:'trendy',
        category:'trendy',
        boxshadow:' rgba(0, 0, 0, 0.1) 0px 4px 12px'
    },
    {
        id:48,
        title:'trendy',
        category:'trendy',
        boxshadow:' rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'
    },
    {
        id:49,
        title:'trendy',
        category:'trendy',
        boxshadow:' rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
    },
    {
        id:50,
        title:'trendy',
        category:'trendy',
        boxshadow:' rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em'
    },
    {
        id:51,
        title:'trendy',
        category:'trendy',
        boxshadow:' rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'
    },

    {
        id:52,
        title:'trendy',
        category:'trendy',
        boxshadow:' rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px'
    },

    {
        id:53,
        title:'trendy',
        category:'trendy',
        boxshadow:' rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px'
    },
    {
        id:54,
        title:'trendy',
        category:'trendy',
        boxshadow:' rgba(17, 17, 26, 0.1) 0px 0px 16px'
    },
    {
        id:55,
        title:'trendy',
        category:'trendy',
        boxshadow:'  rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'
    },
    {
        id:56,
        title:'trendy',
        category:'trendy',
        boxshadow:' rgba(0, 0, 0, 0.15) 0px 2px 8px'
    },
   
    {
        id:57,
        title:'trendy',
        category:'trendy',
        boxshadow:' rgba(0, 0, 0, 0.09) 0px 3px 12px'
    },
    {
        id:58,
        title:'trendy',
        category:'trendy',
        boxshadow:' rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
    },


    
]

export default data;