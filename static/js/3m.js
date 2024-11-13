$(() => {
    // GSAP 및 ScrollTrigger 플러그인 로드 필수
    gsap.registerPlugin(ScrollTrigger, TextPlugin); // TextPlugin도 등록해줘야 합니다.

    // 타임라인 생성
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            start: "top top", // 스크롤이 .about 섹션의 상단에 도달할 때 애니메이션 시작
            end: "+=300%", // 스크롤 길이를 더 길게 설정
            scrub: true, // 스크롤에 따라 애니메이션이 자연스럽게 이어짐
            pin: true, // .about 섹션을 고정
            pinSpacing: true, // 고정 시 하단에 여백 추가
            // markers: true, // marker 표시로 디버깅 가능하게 설정
        },
    });

    // 초기 설정: .about-contents .description 내부 p 요소들을 숨김
    gsap.set(".about-contents .description p", { opacity: 0, y: 20 }); // 각 p 요소들 숨기기

    // 애니메이션 순서
    tl
        // 1. .breadcrumb가 자연스럽게 위로 사라짐
        .to(".breadcrumb", {
            y: -100,
            opacity: 0,
            duration: 1,
        })

        // 2. .about-contents .title 타이핑 효과 추가
        .to(".about-contents .title", {
            duration: 5, // duration을 5로 줄여서 더 빨리 나타나게 설정
            opacity: 1,
            text: { value: "<b>3M</b> 소개", delimiter: "" }, // 타이핑할 텍스트와 구분자 설정
            ease: "power3.inOut", // 타이핑 효과의 완급 조절
        })

        // 3. .about-contents .description의 p 요소들이 순차적으로 나타남
        .to(".about-contents .description p", {
            opacity: 1,
            y: 0,
            stagger: 1, // 각 p 요소가 1초 간격으로 나타남
            duration: 6,
            ease: "power3.out", // 부드럽게 나타나도록 설정
        });

    gsap.to(".environment", {
        scrollTrigger: {
            trigger: ".environment", // .environment 요소가 트리거
            start: "top center", // 스크롤이 .environment 요소의 상단이 화면의 절반에 도달할 때 시작
            end: "center center", // .environment 요소의 하단이 화면의 절반에 도달할 때 끝
            scrub: true, // 스크롤에 따라 애니메이션이 자연스럽게 이어짐
            // markers: true, // marker 표시로 디버깅 가능하게 설정
        },
        backgroundColor: "#222", // 배경색을 빨간색으로 변경 (원하는 색으로 수정)
    });

    // 타임라인 생성 (변수명 변경)
    const environmentTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".environment",
            start: "top center",
            end: "center center",
            scrub: true,
            // markers: true,
        },
    });

    // 타이틀 애니메이션
    environmentTL.from(".title", {
        opacity: 0,
        y: -50,
        duration: 1,
    });
    environmentTL.from(".text-content-wrap p", {
        opacity: 0,
        y: 30,
        duration: 1.5,
        stagger: 0.3,
    });
});
