import { trigger, state, stagger, style, transition, keyframes, animate, query, animateChild } from '@angular/animations';

// not working
export const spinAnimation =
    trigger('spinAnimation', [
        transition(':enter',
            animate('2s', keyframes([
                style({ transform: 'rotateY(0deg)', offset: 0 }),
                style({ transform: 'rotateY(90deg)', offset: .33 }),
                style({ transform: 'rotateY(180deg)', offset: .66 }),
            ]))
        )
    ]);

export const slideInOutAnimation =
    trigger('slideInOutAnimation', [
        transition(':enter', [
            style({
                transform: 'translateX(-400%)'
            }),
            animate('.5s ease-in-out',
                style({
                    transform: 'translateX(0)',
                    position: 'relative'
                })),
        ]),
        transition(':leave', [
            animate('.5s ease-in-out',
                style({
                    transform: 'translateX(-400%)',
                })
            )
        ])
    ]);

export const parentFadeIn = trigger('parentFadeIn', [
    transition('* => *', [
        query('.fadeIn', [
            style({ opacity: 0 }),
            animate(500, style({ opacity: 1 }))
        ], { optional: true }),
        query('@slideInOutAnimation', [
            stagger('300ms', [
                animateChild()
            ])
        ], { optional: true })
    ])
]);

export const simpleFadeIn = trigger('simpleFadeIn', [
    transition('* => *', [
            style({ opacity: 0 }),
            animate(2000, style({ opacity: 1 }))
    ])
]);
