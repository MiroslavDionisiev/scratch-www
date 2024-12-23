const PropTypes = require('prop-types');
const React = require('react');
const {shouldDisplayOnboarding} = require('../../lib/onboarding.js');

const Box = require('../box/box.jsx');

require('./welcome.scss');

const Welcome = props => (
    <Box
        className="welcome"
        moreHref="#"
        moreProps={{
            className: 'close',
            title: 'Dismiss',
            onClick: props.onDismiss
        }}
        moreTitle="x"
        title={props.messages['welcome.welcomeToScratch']}
    >
        <div className="welcome-options">
            <a
                id="welcome.explore"
                className="welcome-option-button"
                href="/starter-projects"
            >
                {props.messages['welcome.explore']}
                <img
                    alt="Starter Projects"
                    src="/images/explore_starter_projects.svg"
                />
            </a>
            <a
                id="welcome.community"
                className="welcome-option-button"
                href="/community_guidelines"
            >
                {props.messages['welcome.community']}
                <img
                    alt="Community Guidelines"
                    src="/images/learn_about_the_community.svg"
                />
            </a>
            <a
                id="welcome.create"
                className="welcome-option-button"
                href={
                    shouldDisplayOnboarding(props.user, props.permissions) ?
                        '/projects/editor/' :
                        '/projects/editor/?tutorial=getStarted'
                }
            >
                {props.messages['welcome.create']}
                <img
                    alt="Get Started"
                    src="/images/create_a_project.svg"
                />
            </a>
        </div>
    </Box>
);

Welcome.propTypes = {
    messages: PropTypes.shape({
        'welcome.welcomeToScratch': PropTypes.string,
        'welcome.explore': PropTypes.string,
        'welcome.community': PropTypes.string,
        'welcome.create': PropTypes.string
    }),
    onDismiss: PropTypes.func,
    permissions: PropTypes.object,
    user: PropTypes.object
};

Welcome.defaultProps = {
    messages: {
        'welcome.welcomeToScratch': 'Welcome to Scratch!',
        'welcome.explore': 'Explore Starter Projects',
        'welcome.community': 'Learn about the community',
        'welcome.create': 'Create a Project'
    }
};

module.exports = Welcome;
